const { test, expect } = require('@playwright/test');

test('Navigation and state management', async ({ page }) => {
  // Navigate to main page
  await page.goto('https://the-internet.herokuapp.com/');

  // Click on Form Authentication link
  await page.click('a[href="/login"]');

  // Verify we're on login page
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');

  // Go back to main page
  await page.goBack();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/');

  // Go forward to login page again
  await page.goForward();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');

  // Reload the page
  await page.reload();

  // Verify page content after reload
  await expect(page.locator('h2')).toHaveText('Login Page');

  // Navigate explicitly back to home page
  await Promise.all([
    page.waitForNavigation(),
    page.goto('https://the-internet.herokuapp.com/')
  ]);

  // Verify we're back on main page
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
});

const { test, expect } = require('@playwright/test');

test('Cross-browser content verification', async ({ page, browserName }) => {
// Navigate to test page
await page.goto('https://httpbin.org/html');

// Verify basic structure exists in all browsers
await expect(page.locator('h1')).toHaveText('Herman Melville - Moby-Dick');

	// Verify paragraph content
const paragraph = page.locator('p');
await expect(paragraph).toContainText('The novel details the experiences of');

// Browser-specific assertions
if (browserName === 'chromium') { console.log('Running on Chromium');
} else if (browserName === 'firefox') { console.log('Running on Firefox');
} else if (browserName === 'webkit') { console.log('Running on WebKit (Safari)');
}

// Take browser-specific screenshots
await page.screenshot({ path: `screenshot-${browserName}.png` });

// Verify page title
await expect(page).toHaveTitle('Herman Melville - Moby-Dick');
});
