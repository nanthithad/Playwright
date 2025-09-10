import { test, expect } from '@playwright/test';

test.setTimeout(180000);
test('Handle Confirmation Alert - Accept OK', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');
  // Attach the listener BEFORE triggering the dialog
  page.once('dialog', async dialog => {
    console.log('Dialog message:', dialog.message());
    await dialog.accept();  // ✅ Click OK
  });
  // Trigger the confirmation alert
  await page.locator('#confirmButton').click();
  // Verify the result message
  await expect(page.locator('#confirmResult')).toHaveText('You selected Ok');
});



