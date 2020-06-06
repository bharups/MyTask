const allurereport = require('@wdio/allure-reporter').default;
allurereport.addStep('Login failure for locked user');
describe("My Test Suite", () => {
    it("LoginFailure", async() =>{
        //Lauch the URL
        await browser.url("https://www.saucedemo.com/");
        var assert = require('assert');
        //To get the data from JSON file
        const data=require('./Logindata.json');
        for( var i=0; i<data[1].username.length; i++){
           
            var element=await browser.$('//input[@id="user-name"]');    //Find the username filed
            await element.waitForExist({timeout:5000});
            await element.setValue(data[1].username[i]);                //Set the username field with value
             element=await browser.$('//input[@id="password"]');        //Find the password filed
            await element.waitForExist({timeout:5000});
            await element.setValue(data[1].password[i]);                 //Set the password filed with value
             element=await browser.$('//input[@type="submit"]');
            await element.waitForExist({timeout:5000});
            await element.click();
             element=await browser.$('//input[@value="LOGIN"]/following-sibling::h3');     //find the error message element
            await element.waitForExist({timeout:5000});
            var text=element.getText();                                                 // get the text of the error message
            console.log('User ' +data[1].username[i]+ ' not able to login with the error message '+text);  //Print the message
            assert.equal(text, 'Epic sadface: Sorry, this user has been locked out.');
           

        }
        
       
    })
})