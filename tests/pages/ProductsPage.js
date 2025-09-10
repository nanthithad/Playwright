// test/pages/ProductsPage.js
class ProductsPage {
  constructor(page) {
    this.page = page;
    this.searchInput = '#search_product';
    this.searchButton = '#submit_search';
    this.productList = '.features_items .product-image-wrapper';
    this.addToCartButtons = '.add-to-cart';
    this.cartButton = 'a[href="/view_cart"]';
  }
 
  async navigate() {
    await this.page.goto('https://automationexercise.com/products', {
      waitUntil: 'domcontentloaded',
    });
  }
 
  async searchProduct(productName) {
    await this.page.fill(this.searchInput, productName);
    await this.page.click(this.searchButton);
  }
 
  async getProductCount() {
    return await this.page.locator(this.productList).count();
  }
 
  async addFirstProductToCart() {
    await this.page.hover(`${this.productList} >> nth=0`);
    await this.page.locator(this.addToCartButtons).first().click();
  }
 
  async goToCart() {
    await this.page.click(this.cartButton);
  }
}
 
module.exports = ProductsPage;