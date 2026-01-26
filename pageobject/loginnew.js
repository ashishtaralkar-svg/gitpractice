class HomePage {
  constructor(page) {
    this.page = page;
    this.phonesCategory = page.locator('a:has-text("Phones")');
    this.laptopsCategory = page.locator('a:has-text("Laptops")');
    this.monitorsCategory = page.locator('a:has-text("Monitors")');
    this.productCard = page.locator('.card-title a');
  }

  async navigate() {
    await this.page.goto('https://www.demoblaze.com/');
  }

  async selectCategory(category) {
    if (category === 'Phones') {
      await this.phonesCategory.click();
    } else if (category === 'Laptops') {
      await this.laptopsCategory.click();
    } else if (category === 'Monitors') {
      await this.monitorsCategory.click();
    }
  }

  async selectProduct(productName) {
    await this.page.locator(`.card-title a:has-text("${productName}")`).click();
  }
}

module.exports = HomePage;