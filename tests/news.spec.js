// cnn-news-browsing.spec.js
const { test, expect } = require('@playwright/test');

test('CNN news browsing test', async ({ page }) => {
  // Navigate to CNN
  await page.goto('https://edition.cnn.com');
  console.log('1. CNN homepage loaded');

  // Accept cookies if present
  try {
    await page.click('button:has-text("Accept"), button:has-text("Agree")', { timeout: 5000 });
    console.log('2. Cookies accepted');
  } catch (error) {
    console.log('2. No cookie banner');
  }

  // Click on first news article safely
  const firstArticle = page.locator('.cd__headline a').first();
  await firstArticle.click();
  console.log('3. Clicked on first article');

  // Wait for article to load
  await page.waitForSelector('h1.pg-headline');
  console.log('4. Article page loaded');

  // Read article title
  const articleTitle = await page.textContent('h1.pg-headline');
  console.log('5. Article title:', articleTitle?.trim());

  // Navigate to World section
  await page.click('a[href*="/world"]');
  console.log('6. Navigated to World section');

  // Wait for world news
  await page.waitForSelector('.cd__headline');
  console.log('7. World news loaded');

  // Search for news
  await page.click('button[aria-label="Search"]');
  await page.fill('input[type="search"]', 'technology');
  await page.press('input[type="search"]', 'Enter');
  console.log('8. Searched for technology news');

  // Wait for search results
  await page.waitForSelector('.cnn-search__results');
  console.log('9. Search results loaded');

  // Verify search worked
  await expect(page).toHaveURL(/search/);
  await expect(page.locator('h1')).toContainText(/Search/i);
  console.log('10. Search verified successfully ✅');
});
