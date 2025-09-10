// simple-locators.js
const { chromium } = require('playwright');

async function simpleLocators() {
  console.log('🎯 Starting simple locators example...');

  const browser = await chromium.launch({ headless: false, slowMo: 100 });
  const page = await browser.newPage();

  // Open login page
  await page.goto('https://the-internet.herokuapp.com/login');
  console.log('1. Navigated to login page');

  // Locate by CSS (ID selector)
  await page.fill('#username', 'tomsmith');
  console.log('2. Filled username using ID selector');

  // Locate by CSS (ID selector)
  await page.fill('#password', 'SuperSecretPassword!');
  console.log('3. Filled password using ID selector');

  // Locate by text
  await page.click('button:has-text("Login")');
  console.log('4. Clicked login button using text locator');

  // Wait and verify
  await page.waitForSelector('#flash');
  const message = await page.textContent('#flash');
  console.log('5. Login message:', message?.trim());

  await page.waitForTimeout(2000);
  await browser.close();
  console.log('✅ Simple locators example completed');
}

simpleLocators().catch(console.error);
