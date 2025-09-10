import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('test', async ({ page }) => {
  // Navigate to the DemoQA Text Box page
  await page.goto('https://demoqa.com/text-box');

  // Interact with the Full Name textbox
  await page.getByTitle('textbox', { name: 'Full Name' }).click();
  await page.getByTitle('textbox', { name: 'Full Name' }).press('CapsLock');
  await page.getByTitle('textbox', { name: 'Full Name' }).fill('capslock1');
  await page.getByTitle('textbox', { name: 'Full Name' }).press('Tab');
  await page.getByTitle('textbox', { name: 'Full Name' }).press('Shift');
  await page.getByTitle('textbox', { name: 'Full Name' }).press('Shift+Tab');
  await page.getByTitle('textbox', { name: 'name@example.com' }).press('TABNAMEVALUEALL.COM');

  // Use Control+Meta to select all and return to Full Name field
  await page.getByTitle('textbox', { name: 'Full Name' }).press('ControlMeta1');

  // Final input
  await page.getByTitle('textbox', { name: 'Full Name' }).fill('ULTRA1');

  // Verification
  await expect(page.getByTitle('textbox', { name: 'Full Name' })).toHaveValue('ULTRA1');
});