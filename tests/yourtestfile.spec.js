import { test, expect } from '@playwright/test';

test('iFrame interactions example', async ({ page }) => {
  // Navigate to the target page
  await page.goto('https://ui.vision/demo/webtest/frames/');

  // Interact with the first frame
  const frame1 = await page.locator('frame').first().contentFrame();
  await frame1.getByText('Frame Test Page Frame1').click();
  await frame1.getByRole('textbox').click();
  await frame1.getByRole('textbox').fill('hello world');
  await frame1.locator('body').click();

  // Interact with the second frame
  const frame2 = await page.locator('frame').nth(1).contentFrame();
  await frame2.getByRole('textbox').click();
  await frame2.getByRole('textbox').fill('hello testing');

  // Interact with the third frame
  const frame3 = await page.locator('frame').nth(2).contentFrame();
  await frame3.getByRole('textbox').click();
  await frame3.getByRole('textbox').fill('hello playwright');
  await frame3.getByText('Frame3 iframe inside frame:').click();

  // Nested iFrame interaction
  const nestedFrame = await frame3.getByText('Loading...').contentFrame();
  await expect(nestedFrame.getByRole('list', { name: 'How do you plan to use the' })).toBeVisible();
  await nestedFrame.getByText('Form-filling and web testing').click();

  // Interact with the fourth frame
  const frame4 = await page.locator('frame').nth(3).contentFrame();
  await frame4.getByRole('textbox').click();
  await frame4.getByRole('textbox').fill('hello india');

  // More nested interactions in the third frame
  await frame3.getByText('Frame3 iframe inside frame:').click();
  const nestedFrame2 = await frame3.getByText('Loading...').contentFrame();
  await nestedFrame2.getByText('Hi, I am the UI.Vision IDE').click();

  await expect(nestedFrame2.getByRole('button', { name: 'Clear selection' })).toBeVisible();
  await nestedFrame2.getByText('Choose').click();

  await expect(nestedFrame2.getByRole('option', { name: 'Yes' })).toBeVisible();
  await nestedFrame2.getByRole('option', { name: 'Well, now I know :-)' }).locator('span').click();

  await nestedFrame2.locator('div').filter({ hasText: /^Page 1 of 2$/ }).first().click();
});
