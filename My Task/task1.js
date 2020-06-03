describe("My Test Suite", () => {
    it("My test case", async() =>{
        await browser.url("https://www.saucedemo.com/");
        const data=require('./Logindata.json');
        for( var i=0; i<data.length; i++){
           
            var element=await browser.$('//input[@id="user-name"]');
            await element.waitForExist({timeout:5000});
            await element.setValue(data[i].username);
             element=await browser.$('//input[@id="password"]');
            await element.waitForExist({timeout:5000});
            await element.setValue(data[i].password);
             element=await browser.$('//input[@type="submit"]');
            await element.waitForExist({timeout:5000});
            await element.click();
             element=await browser.$('//button[text()="Open Menu"]');
            await element.waitForExist({timeout:5000});
            await element.click();
             element=await browser.$('//a[text()="Logout"]');
            await element.waitForExist({timeout:5000});
            await element.click();
            console.log('logged in successfully for the user '+ data[i].username)
           

        }
        
       
    })
})