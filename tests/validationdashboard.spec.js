const { test, expect } = require('@playwright/test');
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');
const {convertCsvToXlsx} = require('@aternus/csv-to-xlsx');
const localDownloadPath = 'C:/Users/kisho/Downloads';
let downloadFilename
 
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
     // Wait for a few seconds
    await page.waitForTimeout(5000); // 5000 milliseconds = 5 seconds
    
    // Example: Applying a filter through an input field
    await page.click("button[class='w-full flex gap-1 items-center bg-white $bg-black py-1.5 px-3 border border-gray-300 rounded-lg']"); 
    await page.click('button:nth-child(4) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1)'); // Replace with actual selector
   // Wait for a few seconds
    await page.waitForTimeout(6000); // 6000 milliseconds = 6 seconds
    // Click on the three dots menu
    await page.click("//div[@id='download']//*[name()='svg']");
    await page.waitForTimeout(4000); 
    await page.click(".text-sm.text-kazamGray-900");
    await page.waitForTimeout(10000); 
    // Uptime and Number of chargers 
    // await page.click("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > div:nth-child(1) > div:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)");
    // await page.waitForTimeout(5000); 
    // await page.click("div[class='bg-white w-full flex flex-col h-full p-4 rounded-lg drop-shadow-sm border border-white hover:cursor-pointer hover:border-gray-200 z-7']");
    // await page.waitForTimeout(3000); 
    // await page.click("p[class='text-sm'] div[class='text-sm $ ']");
    // await page.waitForTimeout(4000);
    // Click on the three dots menu
    // await page.click("//div[@id='download']//*[name()='svg']");
    // await page.waitForTimeout(2000); // 2000 milliseconds = 2 seconds
});


test("Email download",async ({ page }) => {
  
    const email = "akhilesh@kazam.in";
    await page.goto('https://mail.google.com');
  
    // Wait for the user to login 
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
        // Trigger the download
        await page.getByRole('link', { name: 'Download Report' }).click();

    // Handle the download
      page.on('download', async (download) => {
      const downloadPath = path.join(localDownloadPath, download.suggestedFilename());
      await download.saveAs(downloadPath);
      downloadFilename= download.suggestedFilename()
   });
  
    await page.waitForTimeout(5000); // 5000 milliseconds = 5 seconds
    console.log(await page.title());
});

test("Total No of session validation",async ({ page }) => {
   const XLSX = require('xlsx');({
    acceptDownloads: true,
  });

  let source = path.join(localDownloadPath, downloadFilename);
  console.log('source',source);
  let destination = path.join(localDownloadPath, 'converted_report.xlsx'); 
  console.log('destination',destination);
  try { 
   await convertCsvToXlsx(source, destination)
} catch (e) { 
    console.error(e.toString()); 
}

  
  // Path to the downloaded file
  const filePath = path.join(process.env.HOME || process.env.USERPROFILE, 'Downloads', 'Total usage.xlsx');
  
  // Check if the file exists
  if (fs.existsSync(filePath)) {
     // Read the Excel file
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0]; // Get the first sheet name
  const worksheet = workbook.Sheets[sheetName];

  // Convert sheet to JSON to easily access rows and columns
  const sheetJson = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  // Count non-empty cells in the second column excluding the first cell
  let nonEmptyCellCount = 0;
  for (let i = 1; i < sheetJson.length; i++) {
    if (sheetJson[i][1]) { // Index 1 corresponds to the second column
      nonEmptyCellCount++;
    }
  }

  console.log(`Total no of sessions: ${nonEmptyCellCount}`);
  }
});

test("Total usage validation",async ({ page }) => {
  const fs = require('fs');
  const path = require('path');
  const XLSX = require('xlsx');({
    acceptDownloads: true,
  });
  
  function processExcelFile(filePath) {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // Assuming you want the first sheet
    const sheet = workbook.Sheets[sheetName];

   // Convert sheet to JSON to easily access rows and columns
   const sheetJson = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

   // Initialize sum variable
   let sum = 0;
 
   // Loop through the eighth column (index 7) starting from the second row (index 1)
   for (let i = 1; i < sheetJson.length; i++) {
     let cellValue = sheetJson[i][7]; // Index 7 corresponds to the eighth column
 
     if (typeof cellValue === 'string') {
       // Remove "Kwh" and convert to number
       cellValue = parseFloat(cellValue.replace('kWh', '').trim());
     }
 
     if (!isNaN(cellValue)) {
       sum += cellValue;
     }
   }
 
   console.log(`Total usage (In kWh): ${sum}`);
 
}
});
