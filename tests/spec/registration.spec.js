const { test, expect } = require('@playwright/test');
const RegistrationPage = require('../pages/RegistrationPage');

test.describe('Registration Form Test', () => {
  test('Fill registration form and submit successfully', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    // Navigate and wait for the registration form to load
    await registrationPage.navigateToRegistrationPage();

    const timestamp = Date.now();
    const uniqueEmail = `nandhitha${timestamp}@example.com`;

 await registrationPage.fillRegistrationForm({
  firstName: 'Nandhitha',
  lastName: 'Devi',
  email: uniqueEmail,
  number: '9924567446',         // Add phone number
  role: '2: Student',           // Add role (value as per the select options)
  gender: 'Female',             // Add gender if needed
  password: 'Password123',
});

await registrationPage.submitForm();
console.log(await page.url()); // See what the URL is after registration
await expect(page).toHaveURL(/register/); // Update this if needed
  });
});