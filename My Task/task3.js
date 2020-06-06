const allurereport = require('@wdio/allure-reporter').default;
allurereport.addStep('Adding an item to the cart and ordering an item');
describe("My Test Suite", () => {
    it("Adding to cart and ordering an item", async() =>{
        
        //launh the URl
        await browser.url("https://www.saucedemo.com/");
        const data=require('./Logindata.json');                //To get the data from JSON file
        
           
            var element=await browser.$('//input[@id="user-name"]');      // find the username field
            await element.waitForExist({timeout:5000});                     //wait for 5 secs for the element to appear
            await element.setValue(data[0].username[0]);                     // Set the username filed with value
             element=await browser.$('//input[@id="password"]');          // find the password filed
            await element.waitForExist({timeout:5000});
            await element.setValue(data[0].password[0]);                     //Set the password field with value
             element=await browser.$('//input[@type="submit"]');          // find the subit button
            await element.waitForExist({timeout:5000});
            await element.click();
            var all=[];
            element=await browser.$$('//*[@class="inventory_item_price"]');
            const No_of_Prod=element.length;
            
            console.log(No_of_Prod);
            var prodCost;
            var min=Infinity;
            var text;
            for(var i=0;i<No_of_Prod;i++){
                 text=await element[i].getText();
                    console.log('product cost of '+i+' is '+text);
                    console.log('Type of cost value is '+typeof text);
                    prodCost=text.substring(1);
                    prodCost=parseFloat(prodCost);
                    console.log("Prod cost is "+prodCost);
                    console.log('type of product cost '+typeof prodCost);
                    
                
                
                all[i]=prodCost;
                  
            }   
            console.log('list of cost'+all);
            //console.log("list of all product cost"+ all);
            var min = all[0];
            var minIndex = 0;

           for (var i = 1; i < all.length; i++) {
           if (all[i] < min) {
               minIndex = i;
              min = all[i];
              }
              }
              var prodIndex=minIndex+1;
              console.log('Cheapest amount is'+all[minIndex]);
              element= await browser.$('(//*[@class="inventory_item_name"])['+prodIndex+']');
              text= await element.getText();
              console.log('cheapest item name '+text)
              element=await browser.$('(//*[@class="btn_primary btn_inventory"])['+prodIndex+']');
              element.click();
            //var element=await browser.$("(//button[text()='ADD TO CART'])[1]");
           // await element.click();
            var element=await browser.$("//div[@id='shopping_cart_container']//a");
            await element.click();
            var element=await browser.$('//a[text()="CHECKOUT"]');
            await element.click();
            var element=await browser.$('//input[@id="first-name"]');
            await element.waitForExist(2000);
            await element.setValue(data[0].firstname[0]);
            var element=await browser.$('//input[@id="last-name"]');
            await element.waitForExist(2000);
            await element.setValue(data[0].lastname[0]);
            var element=await browser.$('//input[@id="postal-code"]');
            await element.waitForExist(2000);
            await element.setValue(data[0].postalcode[0]);
            var element=await browser.$("//input[@value='CONTINUE']");
            await element.waitForExist(2000);
            await element.click();
            var element=await browser.$('//a[text()="FINISH"]');
            await element.waitForExist(2000);
            await element.click();   
            element=await browser.$('//button[text()="Open Menu"]');      //Find openmenu element
            await element.waitForExist({timeout:5000});
            await element.click();                                      //click on open menu
             element=await browser.$('//a[text()="Logout"]');              //find the logout element
            await element.waitForExist({timeout:5000});
            await element.click();                                         //click on logout
            console.log('logged in successfully for the user '+ data[0].username[0]);      //print the message
            
           

        
        
        
       
    })
})