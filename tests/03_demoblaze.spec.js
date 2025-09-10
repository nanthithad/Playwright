import { test, expect } from '@playwright/test';

test('Validate page title and URL', async ({ page }) => {
  await page.goto(' https://demoblaze.com/');

  const actualTitle = await page.title();
  const actualURL = await page.url();

  const expectedTitle = "STORE";
  const expectedURL = " https://demoblaze.com/";

  expect(actualTitle).toBe(expectedTitle);
  expect(actualURL).toBe(expectedURL);
});