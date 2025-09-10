import { test, expect } from '@playwright/test';

test.setTimeout(30000);

test('should verify content in nested frames - reliable for Firefox', async ({ page }) => {
  await page.goto('https://demoqa.com/nestedframes');

  await expect(page.locator('h1')).toHaveText('Nested Frames');

  // Get the parent frame by name or URL (fallback if frameLocator fails)
  const parentFrame = page.frame({ url: /\/sample/ });  // The URL contains 'sample' (use real frame URL part)
  expect(parentFrame).not.toBeNull();

  const parentBody = parentFrame.locator('body');
  await expect(parentBody).toContainText('Parent frame');

  // Get child frame inside the parent frame
  const childFrame = parentFrame.childFrames()[0];
  expect(childFrame).not.toBeNull();

  const childBody = childFrame.locator('body');
  await expect(childBody).toContainText('Child Iframe');
});
