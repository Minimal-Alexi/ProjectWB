const vendorCheck = async (VendorID) =>
    {
        try
        {
            const User = await require('../Models/userModel').findById(VendorID);
            console.log(User);
            if(User.accountType < 1)
                {
                    console.log("false");
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