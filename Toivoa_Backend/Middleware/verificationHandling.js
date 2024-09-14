const vendorCheck = async (VendorID, checkType) =>
    {
        //checkType is 1 for vendors, 2 for marketervendors.
        try
        {
            const User = await require('../Models/userModel').findById(VendorID);
            if(User.accountType < checkType)
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