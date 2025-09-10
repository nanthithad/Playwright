// advanced-locators-saucedemo.js
const { chromium } = require('playwright');

async function advancedLocatorsSauceDemo() {
  console.log('🚀 Starting advanced locators example on SauceDemo...');

  const browser = await chromium.launch({ headless: false, slowMo: 150 });
  const page = await browser.newPage();

  // 1. Navigate to SauceDemo
  await page.goto('https://www.saucedemo.com/');
  console.log('1. Navigated to SauceDemo login page');

  // 2. Login (basic locators + chained selectors)
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  console.log('2. Logged in successfully');

  // 3. Locate products using :has() (only items with price tag)
  const products = await page.$$('.inventory_item:has(.inventory_item_price)');
  console.log(`3. Found ${products.length} products with prices`);

  // 4. Filter by text content (products containing "Backpack")
  const backpack = await page.$('div.inventory_item_name:has-text("Backpack")');
  console.log('4. Found product with text: Backpack');

  // 5. Get product price using chaining
  const backpackPrice = await backpack.evaluate(el => 
    el.closest('.inventory_item').querySelector('.inventory_item_price').textContent.trim()
  );
  console.log('5. Backpack price:', backpackPrice);

  // 6. Click "Add to cart" using relative selector
  const addToCartButton = await backpack.evaluateHandle(el => 
    el.closest('.inventory_item').querySelector('button')
  );
  await addToCartButton.click();
  console.log('6. Added Backpack to cart');

  // 7. Get cart count
  const cartCount = await page.textContent('.shopping_cart_badge');
  console.log('7. Cart count:', cartCount);

  await page.waitForTimeout(3000);
  await browser.close();
  console.log('✅ Advanced locators example completed');
}

advancedLocatorsSauceDemo().catch(console.error);
