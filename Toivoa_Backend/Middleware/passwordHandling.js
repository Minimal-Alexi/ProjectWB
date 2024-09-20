const bcrypt = require('bcrypt');

const passwordEncryption = async (password) =>
    {
        const passwordSalt = await bcrypt.genSalt(5);
        const hashedPassword = await bcrypt.hash(password, passwordSalt);
        return {passwordSalt,hashedPassword}
    }

module.exports = {
    passwordEncryption
}