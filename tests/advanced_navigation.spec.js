const { test, expect } = require('@playwright/test');

test('Advanced navigation patterns', async ({ page }) => {
  // Navigate to redirector page
  await page.goto('https://the-internet.herokuapp.com/redirector');

  // Click redirect link and wait for navigation in SAME page
  await Promise.all([
    page.waitForNavigation(),
    page.click('#redirect')
  ]);

  // Verify we landed on status_codes page
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/status_codes');

  // Go back to original redirector page
  await page.goBack();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/redirector');

  // Test waiting for specific navigation events
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    page.goto('https://the-internet.herokuapp.com/')
  ]);

  // Verify navigation completed
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/');

  // Test reload with options
  await page.reload({ waitUntil: 'domcontentloaded' });
});
