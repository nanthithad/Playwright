const { chromium, firefox, webkit } = require('playwright');

async function launchBrowsers() {
console.log('🚀 Launching different browsers...');

// Chromium
const chromiumBrowser = await chromium.launch({ headless: false }); console.log('✅ Chromium launched');
await chromiumBrowser.close();

// Firefox
const firefoxBrowser = await firefox.launch({ headless: false }); console.log('✅ Firefox launched');
await firefoxBrowser.close();

// WebKit
const webkitBrowser = await webkit.launch({ headless: false }); console.log('✅ WebKit launched');
await webkitBrowser.close();
}
launchBrowsers().catch(console.error);