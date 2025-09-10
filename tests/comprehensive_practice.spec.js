import { test, expect } from '@playwright/test';
 
// 1. Clean Up Generated Code
test('Clean up codegen example', async ({ page }) => {
  await page.goto('https://playwright.dev');
 
  // Before cleanup (example style) → commented out to avoid errors
  // await page.click('#someId');
  // await page.waitForTimeout(3000);
  // await page.click('#anotherId');
 
  // After cleanup (real working selectors)
  await page.getByRole('link', { name: 'Docs' }).click();
  await expect(page).toHaveURL(/docs/);
 
  console.log('✅ Cleaned up selectors & removed hard waits');
});
 
// 2. Add Assertions
test('Assertions example', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await page.getByRole('link', { name: 'Docs' }).click();
 
  await expect(page).toHaveURL(/docs/);
  await expect(page.locator('h1')).toContainText('Getting started');
 
  console.log('✅ Added verification points for Docs page');
});
 
// 3. Handle Dynamic Elements
test('Dynamic elements example', async ({ page }) => {
  await page.goto('https://playwright.dev');
 
  // Handle search box (dynamic element)
  const searchBox = page.getByPlaceholder('Search');
  await expect(searchBox).toBeVisible();
  await searchBox.fill('test');
  await page.keyboard.press('Enter');
 
  await expect(page).toHaveURL(/search/);
 
  console.log('✅ Handled dynamic search input');
});
 
// 4. Error Handling
test('Error handling example', async ({ page }) => {
  await page.goto('https://playwright.dev');
 
  try {
    await page.click('button:has-text("Accept")', { timeout: 5000 });
    console.log('✅ Cookie banner accepted');
  } catch (error) {
    console.log('⚠️ Cookie banner not found (expected)');
  }
 
  console.log('✅ Error handling example completed');
});