import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('textbox', { name: 'Search For' }).click();
  await page.getByRole('textbox', { name: 'Search For' }).fill('fastrack groove');
  await page.getByRole('textbox', { name: 'Search For' }).press('Enter');
  await page.getByRole('button', { name: 'Go' }).click();
  await page.locator('#a-autoid-10-announce').click();
  await page.getByRole('link', { name: 'item in cart' }).click();
  await page.getByRole('button', { name: 'Proceed to checkout Check out' }).click();
});