const { chromium } = require('playwright'); async function handleMouseActions() {
const browser = await chromium.launch({ headless: false }); const page = await browser.newPage();

// Basic mouse actions
await page.goto('https://the-internet.herokuapp.com/hovers');

// Hover over element
const avatar = await page.$('.ﬁgure'); await avatar.hover();

// Verify hover effect
const caption = await page.$('.ﬁgcaption'); const isVisible = await caption.isVisible();
console.log('Caption visible after hover:', isVisible);

// Right click context menu
await page.goto('https://example.com'); await page.click('body', { button: 'right' });

// Double click
await page.goto('https://practice.expandtesting.com/double-click'); const doubleClickBtn = await page.$(' double-click-btn');
await doubleClickBtn.dblclick();

// Drag and drop
await page.goto('https://the-internet.herokuapp.com/drag_and_drop'); const columnA = await page.$(' column-a');
const columnB = await page.$(' column-b'); await columnA.dragTo(columnB);
// Precise mouse movements  ith coordinates
await page.mouse.move(100, 100); await page.mouse.down();
await page.mouse.move(200, 100);
await page.mouse.move(200, 200);
await page.mouse.move(100, 200);
await page.mouse.move(100, 100); await page.mouse.up();

// Mouse  heel scrolling
 
await page.mouse.wheel(0, 500); // Scroll do n 500 pixels
await page.waitForTimeout(2000); await browser.close();
}

handleMouseActions();
