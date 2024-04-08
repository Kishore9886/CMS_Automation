const { test } = require("@playwright/test");

test("Login Flow", async ({ browser }) => {
  //chrome - plugins / cookies;
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://novo.kazam.in/");
});
