const { test, expect } = require('@playwright/test');
test('Complex form with multiple field types', async ({ page }) => {
// Navigate to the form elements demo page
await page.goto('https://www.globalsqa.com/demo-site/select-elements/');

// Switch to the iframe containing the form
const frame = page.frameLocator('iframe[src*="select-elements"]');

// Test dropdown selection
const speedDropdown = frame.locator('#speed'); await speedDropdown.selectOption('Slower');
await expect(speedDropdown).toHaveValue('Slower');

const fileDropdown = frame.locator('#files');
await fileDropdown.selectOption('Some unknown file');
await expect(fileDropdown).toHaveValue('Some unknown file');

const numberDropdown = frame.locator('#number'); await numberDropdown.selectOption('5');
await expect(numberDropdown).toHaveValue('5');

// Test radio buttons
const radioButtons = frame.locator('input[name="radioButton"]'); await radioButtons.nth(2).check(); 
// Select third radio button await expect(radioButtons.nth(2)).toBeChecked();

// Test checkboxes
const checkboxes = frame.locator('input[type="checkbox"]');

// Check first two checkboxes await checkboxes.nth(0).check(); await checkboxes.nth(1).check();

// Verify they are checked
await expect(checkboxes.nth(0)).toBeChecked(); await expect(checkboxes.nth(1)).toBeChecked();

// Uncheck the first one
await checkboxes.nth(0).uncheck();
await expect(checkboxes.nth(0)).not.toBeChecked();

// Test multi-select dropdown
 
const multiSelect = frame.locator('#icons');
await multiSelect.selectOption(['ui-icon-alert', 'ui-icon-info']);

// Verify multiple options are selected
const selectedOptions = await multiSelect.evaluate(select => {
return Array.from(select.selectedOptions).map(option => option.value);
});
expect(selectedOptions).toContain('ui-icon-alert'); expect(selectedOptions).toContain('ui-icon-info');
});

