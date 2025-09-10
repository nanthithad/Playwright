import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('test', async ({ page }) => {
  // Navigate to the Alerts demo page
  await page.goto('https://demoqa.com/alerts');
  
  // Locate the page heading (role="heading")
  // Playwright automatically finds the first heading on the page
  // Verification Point
  // Assert that the heading contains the text "Alerts"
  // This confirms that the correct page has loaded
  await expect(page.getByRole('heading')).toContainText('Alerts');
});
