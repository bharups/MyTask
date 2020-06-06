import Object from './pageObject'
const allurereport = require('@wdio/allure-reporter').default;
const data=require('./Logindata.json');
describe("My Test Suite", () => {
    it("Adding to cart and ordering", async() =>{
        await browser.url('https://www.saucedemo.com/');
        Object.LoginToSauceDemo("standard_user","secret_sauce");
        allurereport.addStep('Logged into the application');
        Object.SelectCheaperProduct();
        allurereport.addStep('GotListofProducts');

        })
         
})