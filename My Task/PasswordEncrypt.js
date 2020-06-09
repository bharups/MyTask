const CryptoJS = require("crypto-js");
const { v4: uuidv4 } = require('uuid');
    const key  = uuidv4();
class PasswordEncryption{

    async EncryptPassword(password){
        
        
        let encryptedPassword = CryptoJS.AES.encrypt(password, key).toString();
        return encryptedPassword;
    
    }
    async DecryptPasssword(password){
        let decryptedPassword  = CryptoJS.AES.decrypt(password, key);
        var plaintext = decryptedPassword.toString(CryptoJS.enc.Utf8);
       return plaintext;
    }
}
module.exports = new PasswordEncryption();

