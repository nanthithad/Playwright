//github-workflow.spec.js
const { test, expect } = require('@playwright/test');
test('GitHub workflow test', async ({ page }) => {
// Set longer timeout for demo purposes
test.setTimeout(60000);
// Navigate to GitHub
await page.goto('https://github.com/');
console.log('1. Navigated to GitHub homepage');
// Explore Sign up flow
await page.click('header >> text=Sign up');
console.log('2. Clicked Sign up button');
await page.waitForSelector('h1:has-text("Create your account")');
console.log('3. Sign up page loaded');
// Go back to homepage
await page.goBack();
console.log('4. Returned to homepage');
// Explore Sign in flow
await page.click('a:has-text("Sign in")');
console.log('5. Clicked Sign in button');
// Fill login form with test data (won't actually submit)
await page.fill('#login_field', 'test_user@example.com');
await page.fill('#password', 'test_password_123');
console.log('6. Filled login form (test data)');
// Instead of submitting, let's explore GitHub features
await page.goto('https://github.com/features');
console.log('7. Navigated to Features page');
// Explore different sections
await page.click('text=Actions');
console.log('8. Clicked on Actions section');
await page.waitForSelector('h1:has-text("GitHub Actions")');
console.log('9. Actions page loaded');
// Take screenshot for evidence
await page.screenshot({ path: 'github-actions-page.png' });
console.log('10. Screenshot taken');
// Verify page content
const pageTitle = await page.title();
expect(pageTitle).toContain('GitHub Actions');
console.log('11. Page title verified:', pageTitle);
});
console.log('✅ GitHub workflow test created successfully!');
