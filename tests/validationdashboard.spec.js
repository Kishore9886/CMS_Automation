const { test, expect } = require('@playwright/test');
const XLSX = require('xlsx');
 
 
 test('Dashboard validation', async ({ page}) => {
  
  // Navigate to the login page
    await page.goto('https://novo.kazam.in');
  
    // Login
    await page.fill('#large-input','akhilesh@kazam.in');
    await page.fill('#password','Akbl@1724');
    await page.click("button[type='submit']");
    await page.click('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(6) > div:nth-child(1) > div:nth-child(1)');
    // Wait for a few seconds
    await page.waitForTimeout(5000); // 5000 milliseconds = 5 seconds
    await page.click("div[class='bg-white w-full flex flex-col h-full p-4 rounded-lg drop-shadow-sm border border-white hover:cursor-pointer hover:border-gray-200 z-9'] p[class='text-sm text-gray-800 font-normal']");

  
    // Click on the three dots menu
    await page.click("//div[@id='download']//*[name()='svg']");
  
    // Wait for a few seconds
    await page.waitForTimeout(2000); // 2000 milliseconds = 5 seconds
    await page.click(".text-sm.text-kazamGray-900")
    await page.waitForTimeout(10000); // 5000 milliseconds = 5 seconds
});

test("Email download",async ({ page }) => {
  
    const email = "akhilesh@kazam.in";
    await page.goto('https://mail.google.com');
  
    // Wait for the user to login (you may need to modify this according to your setup)
    await page.waitForSelector('input[type="email"]', { visible: true });
    await page.fill('input[type="email"]', 'akhilesh@kazam.in');
    await page.click('div[id="identifierNext"]');
  
    await page.waitForTimeout(2000); // Waiting for next page to load
  
    await page.waitForSelector('input[type="password"]', { visible: true });
    await page.fill('input[type="password"]', 'Akbl@1724');
    await page.click('div[id="passwordNext"]');
  
    await page.waitForNavigation(); // Waiting for login to complete


  // Click on the first email in the inbox
  await page.waitForSelector('table[role="grid"] tr.zA', { visible: true });
  const firstEmail = await page.$('table[role="grid"] tr.zA');
  if (firstEmail) {
    await firstEmail.click();
  } else {
    console.log('No emails found in the inbox.');
  }
  
    // Wait for email content to load
    await page.waitForSelector('.a3s', { visible: true });
  
    // Find and click the first link in the email
    const firstLink = await page.$('.a3s a');
     await page.getByRole('link',{name:'Download Report'}).click();
     await page.waitForTimeout(5000); // 5000 milliseconds = 5 seconds
    console.log(await page.title());
  
  
});

test("Excel",async ({ page }) => {
  const fs = require('fs');
  const path = require('path');
  const XLSX = require('xlsx');
  
  // Path to the downloaded file
  const filePath = path.join(process.env.HOME || process.env.USERPROFILE, 'Downloads', 'Session report2.xlsx');
  
  // Check if the file exists
  if (fs.existsSync(filePath)) {
      // Read the Excel file
      const workbook = XLSX.readFile(filePath);
      const sheetName = workbook.SheetNames[0]; // Get the first sheet
      const sheet = workbook.Sheets[sheetName];
  
      // Convert sheet to JSON to easily count columns
      const jsonSheet = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  
      if (jsonSheet.length > 0) {
          const rawCount = jsonSheet[0].length;
          console.log(`Raw count: ${rawCount}`);
      } else {
          console.log('The sheet is empty.');
      }
  } else {
      console.log('The file does not exist.');
  }
   
});