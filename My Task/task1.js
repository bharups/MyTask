describe("My Test Suite", () => {
    it("LoginSuccess", async() =>{
        //launh the URl
        await browser.url("https://www.saucedemo.com/");
        const data=require('./Logindata.json');                //To get the data from JSON file
        for( var i=0; i<data[0].username.length; i++){
           
            var element=await browser.$('//input[@id="user-name"]');      // find the username field
            await element.waitForExist({timeout:5000});                     //wait for 5 secs for the element to appear
            await element.setValue(data[0].username[i]);                     // Set the username filed with value
             element=await browser.$('//input[@id="password"]');          // find the password filed
            await element.waitForExist({timeout:5000});
            await element.setValue(data[0].password[i]);                     //Set the password field with value
             element=await browser.$('//input[@type="submit"]');          // find the subit button
            await element.waitForExist({timeout:5000});
            await element.click();                                         //click on submit button
             element=await browser.$('//button[text()="Open Menu"]');      //Find openmenu element
            await element.waitForExist({timeout:5000});
            await element.click();                                         //click on open menu
             element=await browser.$('//a[text()="Logout"]');              //find the logout element
            await element.waitForExist({timeout:5000});
            await element.click();                                         //click on logout
            console.log('logged in successfully for the user '+ data[0].username[i]);      //print the message
           

        }
        
       
    })
})