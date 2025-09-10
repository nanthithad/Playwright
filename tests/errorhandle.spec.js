import { test, expect } from '@playwright/test';

test('Error handling with optional cookie banner', async ({ page }) => {
  // Navigate to demo site
  await page.goto('https://playwright.dev');

  // Try to accept cookie banner if it exists
  try {
    await page.click('button:has-text("Accept")', { timeout: 5000 });
    console.log('Cookie banner found and accepted');
  } catch (error) {
    console.log('Cookie banner not found, continuing test...');
  }

  // Continue with normal test steps
  await page.getByRole('link', { name: 'Docs' }).click();
  await expect(page).toHaveURL(/docs/);

  console.log('Navigation to Docs page successful');
});

