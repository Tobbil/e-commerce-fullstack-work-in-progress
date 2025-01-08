export default class ItemPage {
  constructor(page) {
    this.page = page;
    this.addToCartBox = page.getByTestId("qa-add-to-cart-box");
    this.quantityField = this.addToCartBox.locator("input");
    this.addToCartBtn = page.getByRole("button", { name: "ADD TO CART" });
    this.itemName = page.locator('[data-testid="qa-product-name"]');
    this.itemPrice = this.addToCartBox.locator(':has-text("$")');
  }

  async getQuantity() {
    const quantity = await this.quantityField.inputValue();
    return Number(quantity)
  }

  async getItemName() {
    const itemName = await this.itemName.textContent();
    return itemName;
  }

  async getItemPrice() {
    const itemPrice = await this.itemPrice.textContent();
    return itemPrice.replace("$ ", "");
  }

  async addToCart() {
    await this.addToCartBtn.click();
  }
}
