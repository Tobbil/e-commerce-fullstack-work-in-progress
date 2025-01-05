export default class Cart {
  constructor(page) {
    this.page = page;
    this.cartContent = this.page.locator('[data-testid="qa-cart-items"]');
    this.cartItems = this.cartContent.locator(":scope > div");
    this.numberIndicator = this.page.locator("nav .rounded-full");
    this.cartModal = this.page.locator('[data-testid="qa-cart-modal"]');
    this.removeAllBtn = this.cartModal.getByText("Remove all");
  }

  async decreaseItemQuantity(index) {
    await this.page.getByTestId(`qa-cart-item-${index}`).getByText("-").click();
  }

  async increaseItemQuantity(index) {
    return this.page
      .getByTestId(`qa-cart-item-${index}`)
      .getByText("+")
      .click();
  }

  async getItemPrice(index) {
    const itemPrice = await this.page
      .getByTestId(`qa-cart-item-${index}`)
      .getByText("$")
      .innerText();
    return itemPrice.replace("$", "");
  }

  async getItemName(index) {
    const itemName = await this.page
      .getByTestId(`qa-cart-product-${index}-name`)
      .innerText();
    return itemName;
  }

  async removeAll() {
    await this.removeAllBtn.click();
  }
}
