const { test, expect } = require ("@playwright/test");


test("Login Flow",async ({ browser }) => {
  //chrome - plugins / cookies;
  const context = await browser.newContext();
  const page = await context.newPage();
  const email = page.locator('#large-input');
  await page.goto("https://novo.kazam.in");
  console.log(await page.title());
  //login credential
  await email.fill("akhilesh@kazam.in");
  await page.locator("#password").fill("Akbl@1724");
  page.locator("button[type='submit']").click;
  page.close();
  
});
