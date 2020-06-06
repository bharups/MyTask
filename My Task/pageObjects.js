
     class Object {
         LoginToSauceDemo(username, password)
        {
            
            await browser.setTimeout({ 'implicit': 5000 })
                var element= await browser.$('//input[@id="user-name"]');      // find the username field
                await element.waitForExist({timeout:5000});                     //wait for 5 secs for the element to appear
                await element.setValue(username);                          // Set the username filed with value
                 element= await browser.$('//input[@id="password"]');          // find the password filed
                 await element.waitForExist({timeout:5000});
                 await element.setValue(password);                     //Set the password field with value
                
                 element= await browser.$('//input[@type="submit"]');          // find the subit button
                 await element.waitForExist({timeout:5000});
                 await element.click();
        }

         SelectCheaperProduct(username, password)
        {
            var elemets=await browser.$$('//*[@class="inventory_item_price"]');
            console.log(elemets);
            
        }
    }