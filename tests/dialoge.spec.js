import { test, expect } from '@playwright/test';

test('Handle JavaScript Alerts, Confirms, and Prompts', async ({ page }) => {
  // Navigate to the test page
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  // Verify the GitHub Fork image is visible
  await expect(page.getByRole('img', { name: 'Fork me on GitHub' })).toBeVisible();

  // Handle JS Alert dialog
  page.once('dialog', async (dialog) => {
    console.log(`Alert message: ${dialog.message()}`);
    await dialog.dismiss();  // Dismiss the alert
  });
  await page.getByRole('button', { name: 'Click for JS Alert' }).click();

  // Handle JS Confirm dialog (first time)
  page.once('dialog', async (dialog) => {
    console.log(`Confirm message: ${dialog.message()}`);
    await dialog.dismiss();  // Dismiss the confirm dialog
  });
  await page.getByRole('button', { name: 'Click for JS Confirm' }).click();

  // Handle JS Confirm dialog (second time)
  page.once('dialog', async (dialog) => {
    console.log(`Confirm message again: ${dialog.message()}`);
    await dialog.dismiss();  // Dismiss the confirm dialog
  });
  await page.getByRole('button', { name: 'Click for JS Confirm' }).click();

  // Handle JS Prompt dialog
  page.once('dialog', async (dialog) => {
    console.log(`Prompt message: ${dialog.message()}`);
    await dialog.dismiss();  // Dismiss the prompt dialog
  });
  await page.getByRole('button', { name: 'Click for JS Prompt' }).click();

  // Verify that the list contains expected text
  await expect(page.getByRole('list')).toContainText('Click for JS Alert');
});
