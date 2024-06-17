const { test, expect } = require('@playwright/test');
const localpath = 'C:/Users/Admin/pictures';


 test.only('Add charger flow validation', async ({ page}) => {
  
  // Navigate to the login page
     await page.goto('https://novo.kazam.in');
  
    // Login
     await page.fill('#large-input','akhilesh@kazam.in');
     await page.fill('#password','Akbl@1724');
     await page.click("button[type='submit']");
     await page.click('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(7) > div:nth-child(1) > div:nth-child(1)');
    // Wait for a few seconds
     await page.waitForTimeout(3000); // 3000 milliseconds = 3 seconds

    //click charger session module
     await page.click("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > div:nth-child(2) > div:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)");
     await page.waitForTimeout(2000); // 2000 milliseconds = 3 seconds
     await page.click("button[class='text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-4 py-2 text-sm text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700 focus:ring-purple-300 dark:focus:ring-purple-900 rounded-lg w-full flex gap-2 items-center border-gray-300 relative text-nowrap']");
     await page.waitForTimeout(2000); // 2000 milliseconds = 3 seconds
  
    // enter charger name
     await page.locator("#large-input").fill("Kazam_Automation_Test")

    // select host details
    const hostfield = page.locator("//div[contains(@class,'w-full flex flex-col gap-8 p-5 h-full overflow-y-auto text-sm')]//div[1]//div[2]//div[2]");
     await hostfield.click();
     await hostfield.type("Akhilesh");
     await page.waitForTimeout(5000); // 5000 milliseconds = 5 seconds
     await page.click("li:nth-child(1) div:nth-child(1)");
    
    // select segment 
    const segmentfield = page.locator("(//*[name()='svg'])[15]");
     await segmentfield.click();
     await page.click("//div[normalize-space()='Fleet']");

    // select subsegment
    const subsegment = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)");
     await subsegment.click();
     await page.click("//div[normalize-space()='Kazam Hub']");

    // enter total capacity
    const totalcapacity = page.locator("//input[contains(@placeholder,'eg: 3.3, 7.4. 22')]")
     await totalcapacity.click();
     await totalcapacity.clear();
     await totalcapacity.type("7.4");

    // charger type
    const chargertype = page.locator("body div div div div div div div div div div div div div div div button:nth-child(1)");
     await chargertype.click();

     // select parking type
    const parktype = page.locator("//input[@placeholder='Select Parking Type']");
     await parktype.click();
     await page.click("//span[normalize-space()='2W']//span[@class='text-purple-500 w-4 h-4 border rounded border-gray-300']");
     await page.waitForTimeout(2000); // 2000 milliseconds = 2 seconds

    // click on next button
    const nextbutton = page.locator("//button[normalize-space()='Next']");
     await nextbutton.click();


    // connectors page 
    const noofconnectors = page.locator("//body//div//button[2]");
     await noofconnectors.click();

    // connector 1 details
    const connector1 = page.locator("//body//div//div//div//div//div//div//div//div//div//div//div//div[1]//div[1]//div[1]//div[2]//div[1]//*[name()='svg']");
     await connector1.click();
     await page.click("//div[normalize-space()='3 Pin Socket']");

    const totalcapacity1 = page.locator("//body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/input[1]");
     await totalcapacity1.click();
     await totalcapacity1.type("3.3");

    // connector 2 details
    const connector2 = page.locator("//div//div//div//div//div//div//div//div//div//div//div//div//div[2]//div[1]//div[1]//div[2]//div[1]//*[name()='svg']");
     await connector2.click();
     await page.click("//div[normalize-space()='3 Pin Socket']");

    const totalcapacity2 = page.locator("//div[@class='flex flex-col gap-4']//div[2]//div[1]//div[2]//div[2]//input[1]");
     await totalcapacity2.click();
     await totalcapacity2.type("3.3");
     await page.waitForTimeout(2000); // 2000 milliseconds = 2 seconds

   // click on next button
   const nextbutton1 = page.locator("//button[normalize-space()='Next']");
     await nextbutton1.click();
     await page.waitForTimeout(2000); // 2000 milliseconds = 2 seconds

   // Select location and longitude
   const latitude =  page.locator("//input[@placeholder='Latitude']");
     await latitude.click();
     await latitude.clear();
     await latitude.type("12.923");

   const longitude = page.locator("//input[@placeholder='Longitude']");
     await longitude.click();
     await longitude.clear();
     await longitude.type("77.462")
     await page.waitForTimeout(2000); // 2000 milliseconds = 2 seconds

   // get address
   const getaddress = page.locator("//button[normalize-space()='Get Address']");
     await getaddress.click();
     await page.waitForTimeout(2000); // 2000 milliseconds = 2 seconds

   // click on next button
   const nextbutton2 = page.locator("//button[normalize-space()='Next']");
     await nextbutton2.click();
     await page.waitForTimeout(2000); // 2000 milliseconds = 2 seconds

   // Additional details
   const privatecharger = page.locator("//body/div/div/div/div/div/div/main/div/div/div/div/div/div/div[1]/div[2]/div[1]//*[name()='svg']");
     await privatecharger.click();
     await page.click("//div[normalize-space()='No']");

   // charger timings
   const timings = page.locator("//body/div/div/div/div/div/div/main/div/div/div/div/div/div/div[2]/div[2]/div[1]//*[name()='svg']");    
     await timings.click();
     await page.click("//div[normalize-space()='No']");
    
   // select timing
   const checkbox1 = page.locator("(//input[contains(@type,'checkbox')])[1]");
     await checkbox1.click();
   const starttime1 = page.locator("(//input[contains(@type,'time')])[1]"); 
     await starttime1.click();
     await starttime1.type("08:00");
   const endtime1 = page.locator("(//input[contains(@type,'time')])[2]");
     await endtime1.click();
     await endtime1.type("18:00");
    
   const checkbox2 = page.locator("(//input[contains(@type,'checkbox')])[3]");
     await checkbox2.click();
   const starttime2 = page.locator("(//input[contains(@type,'time')])[5]");
     await starttime2.click();  
     await starttime2.type("08:00");
   const endtime2 = page.locator("(//input[contains(@type,'time')])[6]"); 
     await endtime2.click();
     await endtime2.type("18:00");

   const checkbox3 = page.locator("(//input[@id='link-checkbox'])[5]");
     await checkbox3.click();
   const starttime3 = page.locator("(//input[@type='time'])[9]");
     await starttime3.click(); 
     await starttime3.type("08:00");
   const endtime3 = page.locator("(//input[contains(@type,'time')])[10]");
     await endtime3.click();
     await endtime3.type("18:00");
     
  //  // upload image
  //  const uploadimage = page.locator("//label[normalize-space()='Click to upload']");
  //   await uploadimage.click();
  //   await page.waitForTimeout(5000); // 2000 milliseconds = 2 seconds

  // // Add charger button
  // const addcharger = page.locator("//button[normalize-space()='Add Charger']");
  //   await addcharger.click();
  //   await page.waitForTimeout(5000); // 2000 milliseconds = 2 seconds
  // charger id:rdwsma
     // console.log("charger configured successfully")


});


