const path = require('path');
const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  // Navigate to the file upload demo page
  await page.goto('https://the-internet.herokuapp.com/upload');

  // Verify page heading "File Uploader" is visible
  await expect(page.locator('h3')).toBeVisible();

  // Create the path to the test file (make sure test_upload.txt exists in your project root)
  const filePath = path.join(__dirname, 'test_upload.txt');

  // Set the file input with the file using the "Choose File" element
  await page.locator('input[name="file"]').setInputFiles(filePath);

  // Click on the "upload" button
  await page.locator('input[name="submit"]').click();

  // (Verification Point): Check that the uploaded file name is displayed on the page
  await expect(page.locator('#uploaded-files')).toContainText('test_upload.txt');
});
