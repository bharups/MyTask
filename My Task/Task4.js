const Pagemethods = require('./pageObjects');
const allurereport = require('@wdio/allure-reporter').default;
const data=require('./Logindata.json');

describe("My Test Suite", () => {
    
    it("Login to the application", async() =>{
        await browser.url('https://www.saucedemo.com/');
        await browser.setTimeout({ 'implicit': 5000 });
        Pagemethods.LoginToSauceDemo();
        Pagemethods.SelectCheaperProduct();

        })

        
         
})


         