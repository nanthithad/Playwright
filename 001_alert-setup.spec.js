import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('#alertButton').click();
  await page.locator('#timerAlertButton').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('#confirmButton').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('#promtButton').click();
  await page.getByRole('heading', { name: 'Alerts' }).click();
  await page.getByText('Nested Frames').click();
  await page.getByRole('heading', { name: 'Nested Frames' }).click();
  await page.locator('#frame1').contentFrame().getByText('Parent frame').click();
  await page.locator('#frame1').contentFrame().locator('iframe').contentFrame().locator('html').click();
});