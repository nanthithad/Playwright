import { test, expect } from '@playwright/test';

test.setTimeout(120000);
test('test', async ({ page }) => {
  // Navigate to the Alerts demo page
  await page.goto('https://demoqa.com/alerts');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`); // Log the alert message
    dialog.dismiss().catch(() => {}); // Dismiss the alert safely
  });
  // Trigger the alert by clicking the "Click me" button
  await page.locator('#alertButton').click();
  // Step 4: Verification point
  await expect(page.locator('#alertButton')).toBeVisible();
});

