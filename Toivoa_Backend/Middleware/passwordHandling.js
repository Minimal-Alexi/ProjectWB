const bcrypt = require('bcrypt');

const passwordEncryption = async (password) =>
    {
        const passwordSalt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, passwordSalt);
        return hashedPassword
    }
const comparePassword = async (password,storedPassword) => 
    {
        try
        {
            const isMatch = await bcrypt.compare(password,storedPassword)
            if (isMatch)
                {
                    return true;
                }
            return false;
        }
        catch (error)
        {
            console.error(error);
        }
    }


module.exports = {
    passwordEncryption,
    comparePassword
}