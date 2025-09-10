import { test, expect } from '@playwright/test';

test('Handle Iframes properly', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/iframe');

  // Ensure iframe is available
  const frame = page.frameLocator('#mce_0_ifr');

  // Locate the editor inside iframe
  const editor = frame.locator('#tinymce');

  // Clear default text before typing
  await editor.clear();
  await editor.fill('Hello from Playwright inside iframe!');

  // Verify the new text
  await expect(editor).toHaveText('Hello from Playwright inside iframe!');
});
