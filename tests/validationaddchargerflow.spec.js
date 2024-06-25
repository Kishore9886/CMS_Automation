const { test, expect } = require('@playwright/test');
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');
const {convertCsvToXlsx} = require ('@aternus/csv-to-xlsx');
const localDownloadPath = 'C:/Users/Admin/Downloads';
let downloadFilename


 test('Add charger flow validation', async ({ page}) => {
  
    // Navigate to the login page
      await page.goto('https://novo.kazam.in');
  
    // Login
      await page.fill('#large-input','akhilesh@kazam.in');
      await page.fill('#password','Akbl@1724');
      await page.click("button[type='submit']");
      await page.click("//p[normalize-space()='NIKOL EV']");
    // Wait for a few seconds
      await page.waitForTimeout(3000); // 3000 milliseconds = 3 seconds

    //click charger session module
      await page.click("//span[normalize-space()='Chargers & Sessions']");
      await page.waitForTimeout(2000); // 2000 milliseconds = 3 seconds
      await page.click("//button[normalize-space()='Add Charger']");
      await page.waitForTimeout(2000); // 2000 milliseconds = 3 seconds
  
    // enter charger name
      await page.locator("#large-input").fill("Kazam_Automation_Test");

    // select host details
    const hostfield = page.locator("(//input[@placeholder='Select'])[1]");
      await hostfield.click();
      await hostfield.type("Akhilesh");
      await page.waitForTimeout(5000); // 5000 milliseconds = 5 seconds
      await page.click("li:nth-child(1) div:nth-child(1)");
    
    // select segment 
    const segmentfield = page.locator("(//*[name()='svg'])[15]");
      await segmentfield.click();
      await page.click("//div[normalize-space()='Fleet']");

    // select subsegment
    const subsegment = page.locator("(//div[contains(@class,'flex flex-col gap-2 w-full')])[4]");
      await subsegment.click();
      await page.click("//div[normalize-space()='Kazam Hub']");

    // enter total capacity
    const totalcapacity = page.locator("//input[contains(@placeholder,'eg: 3.3, 7.4. 22')]")
      await totalcapacity.click();
      await totalcapacity.clear();
      await totalcapacity.type("7.4");

    // charger type
    const chargertype = page.locator("//p[normalize-space()='AC']");
      await chargertype.click();

    // select parking type
    const parktype = page.locator("//input[@placeholder='Select Parking Type']");
      await parktype.click();
      await page.click("(//span[normalize-space()='2W'])[1]");
      await page.waitForTimeout(2000); // 2000 milliseconds = 2 seconds

    // click on next button
    const nextbutton = page.locator("//button[normalize-space()='Next']");
      await nextbutton.click();


    // connectors page 
    const noofconnectors = page.locator("//p[normalize-space()='2']");
      await noofconnectors.click();

    // connector 1 details
    const connector1 = page.locator("(//input[contains(@placeholder,'Select')])[1]");
      await connector1.click();
      await page.click("//div[normalize-space()='3 Pin Socket']");

    const totalcapacity1 = page.locator("(//input[contains(@placeholder,'eg: 3.3, 7.4. 22')])[1]");
      await totalcapacity1.click();
      await totalcapacity1.type("3.3");

    // connector 2 details
    const connector2 = page.locator("//input[contains(@placeholder,'Select')]");
      await connector2.click();
      await page.click("//div[normalize-space()='3 Pin Socket']");

    const totalcapacity2 = page.locator("(//input[@placeholder='eg: 3.3, 7.4. 22'])[2]");
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
      await longitude.type("77.462");

    // get address
    const getaddress = page.locator("//button[normalize-space()='Get Address']");
      await getaddress.click();
      await page.waitForTimeout(2000); // 2000 milliseconds = 2 seconds

    // click on next button
    const nextbutton2 = page.locator("//button[normalize-space()='Next']");
      await nextbutton2.click();
      await page.waitForTimeout(2000); // 2000 milliseconds = 2 seconds

    // Additional details
    const privatecharger = page.locator("(//input[@placeholder='Select'])[1]");
      await privatecharger.click();
      await page.click("//div[normalize-space()='Yes']");

    // charger timings
    const timings = page.locator("(//*[name()='svg'])[18]");    
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
     
    // // upload image
    // const uploadimage = page.locator("//label[normalize-space()='Click to upload']");
    //   await uploadimage.click();
    //   await page.waitForTimeout(5000); // 2000 milliseconds = 2 seconds

    // // Add charger button
    // const addcharger = page.locator("//button[normalize-space()='Add Charger']");
    //   await addcharger.click();
    //   await page.waitForTimeout(5000); // 2000 milliseconds = 2 seconds
    // //charger id:rdwsma
    //  console.log("charger configured successfully");


});

test.only("Reconfiguration Validation",async ({ page }) => {

    // Navigate to the login page
      await page.goto('https://novo.kazam.in');
 
    // Login
      await page.fill('#large-input','akhilesh@kazam.in');
      await page.fill('#password','Akbl@1724');
      await page.click("button[type='submit']");
      await page.click("//p[normalize-space()='NIKOL EV']");
    // Wait for a few seconds
      await page.waitForTimeout(3000); // 3000 milliseconds = 3 seconds
    //click charger session module
      await page.click("//span[normalize-space()='Chargers & Sessions']");
      await page.waitForTimeout(3000); // 3000 milliseconds = 3 seconds
  
  
    // search for a configured charger
    const configuredcharger = page.locator("//input[@id='simple-search']");
      await configuredcharger.click();
      await configuredcharger.type("rdwsma");
      await page.waitForTimeout(3000); // 3000 milliseconds = 3 seconds
    const searchclick = page.locator("td:nth-child(2)");
      await searchclick.click();
      await page.waitForTimeout(3000); // 3000 milliseconds = 3 seconds

    // click on reconfiguration button 
    const reconfigurationcharger = page.locator("//button[normalize-space()='Reconfigure Charger']");
      await reconfigurationcharger.click();
      await page.waitForTimeout(3000); // 3000 milliseconds = 3 seconds

    // enter total capacity
    const totalcapacity = page.locator("//input[contains(@placeholder,'eg: 3.3, 7.4. 22')]")
      await totalcapacity.click();
      await totalcapacity.clear ();
      await totalcapacity.clear ();
      await totalcapacity.type("22");

    // click on next button
    const nextbutton = page.locator("//button[normalize-space()='Next']");
      await nextbutton.click();
      await page.waitForTimeout(3000); // 3000 milliseconds = 3 seconds 
      
    // change the connector 1 total capacity
    const totalcapacity1 = page.locator("(//input[contains(@placeholder,'eg: 3.3, 7.4. 22')])[1]");
      await totalcapacity1.click();
      await totalcapacity1.clear();
      await totalcapacity1.clear();
      await totalcapacity1.type("7.7");

    // change connector 2 total capacity
    const totalcapacity2 = page.locator("(//input[@placeholder='eg: 3.3, 7.4. 22'])[2]");
      await totalcapacity2.click();
      await totalcapacity2.clear();
      await totalcapacity2.clear();
      await totalcapacity2.type("7.7");
      await page.waitForTimeout(2000); // 2000 milliseconds = 2 seconds

    // click on next button
    const nextbutton1 = page.locator("//button[normalize-space()='Next']");
      await nextbutton1.click();
      await page.waitForTimeout(2000); // 2000 milliseconds = 2 seconds

    // click on next button
    const nextbutton2 = page.locator("//button[normalize-space()='Next']");
      await nextbutton2.click();
      await page.waitForTimeout(2000); // 2000 milliseconds = 2 seconds

    // Additional details
    const privatecharger = page.locator("(//input[@placeholder='Select'])[1]");
      await privatecharger.click();
      await page.click("//div[normalize-space()='Yes']");

    // charger timings
    const timings = page.locator("(//*[name()='svg'])[18]");    
      await timings.click();
      await page.click("//div[normalize-space()='No']");

    // select timing
    const checkbox1 = page.locator("(//input[contains(@type,'checkbox')])[1]");
      await checkbox1.click();
    const starttime1 = page.locator("(//input[contains(@type,'time')])[1]"); 
      await starttime1.click();
      await starttime1.type("09:00");
    const endtime1 = page.locator("(//input[contains(@type,'time')])[2]");
      await endtime1.click();
      await endtime1.type("19:00");

    const checkbox2 = page.locator("(//input[contains(@type,'checkbox')])[3]");
      await checkbox2.click();
    const starttime2 = page.locator("(//input[contains(@type,'time')])[5]");
      await starttime2.click();  
      await starttime2.type("09:00");
    const endtime2 = page.locator("(//input[contains(@type,'time')])[6]"); 
      await endtime2.click();
      await endtime2.type("19:00");

    const checkbox3 = page.locator("(//input[@id='link-checkbox'])[5]");
      await checkbox3.click();
    const starttime3 = page.locator("(//input[@type='time'])[9]");
      await starttime3.click(); 
      await starttime3.type("09:00");
    const endtime3 = page.locator("(//input[contains(@type,'time')])[10]");
      await endtime3.click();
      await endtime3.type("19:00");

    // // Add charger button
    // const addcharger = page.locator("//button[normalize-space()='Add Charger']");
    //   await addcharger.click();
    //   await page.waitForTimeout(5000); // 2000 milliseconds = 2 seconds
    // //charger id:rdwsma
    //  console.log("charger reconfigured successfully");


    
});



