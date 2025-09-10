const { test, expect } = require('@playwright/test');

test.describe('Registration Form Test on Multiple Browsers', () => {

  test('Fill Registration Form using various locator strategies', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/register');

    // Wait for form to load
    await page.waitForSelector('input[placeholder="First Name"]');

    // 1️⃣ getByPlaceholder() - First Name
    await page.getByPlaceholder('First Name').fill('Nandhitha');

    // 2️⃣ getByRole() - Last Name (textbox with accessible name)
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Devi');

    // 3️⃣ getByText() - Click "I agree to the terms & conditions"
    await page.getByText('I agree to the terms & conditions').click();

    // 4️⃣ locator() with CSS selector - Email
    await page.locator('input[placeholder="Email"]').fill('nandhitha@example.com');

    // 1️⃣ getByPlaceholder() - Password
    await page.getByPlaceholder('Password').fill('Password123');

    // 2️⃣ getByRole() - Confirm Password
    await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Password123');

    // 4️⃣ locator() with CSS selector - Submit Button
    await page.locator('button[type="submit"]').click();

    // Wait for navigation to login page or success message
    await page.waitForURL(/login/);

    // Final Assertion: URL contains 'login'
    await expect(page).toHaveURL(/login/);
  });

});
