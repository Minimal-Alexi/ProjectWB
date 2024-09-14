const vendorCheck = async (VendorID) =>
    {
        try
        {
            const User = await require('../Models/userModel').findById(VendorID);
            if(User.accountType < 1)
                {
                    return false;
                }
            return true;
        }
        catch(error)
        {
            return false;
        }
    }


module.exports =
{
    vendorCheck
} 