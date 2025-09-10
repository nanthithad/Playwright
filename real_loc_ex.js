// ecommerce-locators.js
const { chromium } = require('playwright');

async function ecommerceLocatorsDemo() {
  console.log('🛒 Starting real-world e-commerce locators example...');

  const browser = await chromium.launch({ headless: false, slowMo: 200 });
  const page = await browser.newPage();

  // 1. Navigate to demo e-commerce site
  await page.goto('https://demoblaze.com/');
  console.log('1. Navigated to DemoBlaze homepage');

  // 2. Wait for product grid to load
  await page.waitForSelector('.card');
  console.log('2. Product grid is visible');

  // 3. Get all products on homepage
  const products = await page.$$('.card');
  console.log(`3. Found ${products.length} products on homepage`);

  // 4. Extract details from first 3 products
  for (let i = 0; i < Math.min(3, products.length); i++) {
    const product = products[i];
    const title = await product.$eval('.card-title a', el => el.textContent.trim());
    const price = await product.$eval('.card-block h5', el => el.textContent.trim());

    console.log(`   Product ${i + 1}: ${title} - ${price}`);
  }

  // 5. Click on the first product using text locator
  await page.click('.card-title a:has-text("Samsung galaxy s6")');
  console.log('4. Clicked on "Samsung galaxy s6"');

  // 6. Wait for product detail page
  await page.waitForSelector('.name');
  const productName = await page.textContent('.name');
  const productPrice = await page.textContent('.price-container');

  console.log(`5. Product detail loaded: ${productName} - ${productPrice}`);

  // 7. Add to cart using button locator
  await page.click('a:has-text("Add to cart")');
  console.log('6. Clicked Add to Cart');

  // 8. Wait for alert (confirmation)
  page.once('dialog', async dialog => {
    console.log('7. Alert message:', dialog.message());
    await dialog.dismiss();
  });

  await page.waitForTimeout(3000);
  await browser.close();
  console.log('✅ E-commerce locators example completed');
}

ecommerceLocatorsDemo().catch(console.error);
