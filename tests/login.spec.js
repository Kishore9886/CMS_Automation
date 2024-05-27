const { test } = require("@playwright/test");

("Login Flow", async ({ browser }) => {
  //chrome - plugins / cookies;
  const page = await context.newPage();
  const email = page.locator('#large-input');
  await page.goto("https://novo.kazam.in/");
  console.log(await page.title());
  //login credential
  await email.type("akhilesh@kazam.in");
  await page.locator("#password").fill("Akbl@1724");
  await page.getByRole("button",{name:"login"}).click();
  await page.goto("https://novo.kazam.in/org");
 
});
