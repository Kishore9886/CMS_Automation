const { devices } = require("@playwright/test");

const config = {
  testDir: "./tests",
  timeout: 50 * 1000,
  expect: {
    timeout: 50000,
  },

  reporter: "html",
  use: {
    browserName: "chromium",
    headless: false,
  },
};

module.exports = config;
