const { test, expect } = require('@playwright/test');

test('Successful login test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await expect(page).toHaveTitle('OrangeHRM');
});

test('Another title check', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await expect(page).toHaveTitle('OrangeHRM');
});