import { test, expect } from '@playwright/test';

test.use({ ignoreHTTPSErrors: true }); // Optional if SSL error

test('Validate page title and URL', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/', { timeout: 60000 });

  const actualTitle = await page.title();
  const actualURL = page.url();

  const expectedTitle = "Test Login | Practice Test Automation";
  const expectedURL = "https://practicetestautomation.com/practice-test-login/";

  expect(actualTitle).toBe(expectedTitle);
  expect(actualURL).toBe(expectedURL);
});

