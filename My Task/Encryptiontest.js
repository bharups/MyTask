const encryption1 = require('./PasswordEncrypt');
const allurereport = require('@wdio/allure-reporter').default;
allurereport.addStep('Adding an item to the cart and ordering an item');
describe("My Test Suite", () => {
    it("Adding to cart and ordering an item", async() =>{
        
        const EncPassword= await encryption1.EncryptPassword('password');
        console.log('Encrypted password '+EncPassword );
        const DecryptedPassword = await encryption1.DecryptPasssword(EncPassword);
        console.log('Decrypted password '+DecryptedPassword)
})
})
        
    