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

  async getAllItems() {
    const cartItems = [];
    const cartItemLocators = await this.cartContent.locator(":scope > div");
    const cartItemCount = await this.getAllItemsCount();

    for (let i = 0; i < cartItemCount; i++) {
      const cartItem = cartItemLocators.nth(i); // Get each cart item by index

      const name = await this.getItemName(i);
      const price = await this.getItemPrice(i);
      const quantity = await cartItem
        .locator('[data-testid="qa-cart-quantity"]')
        .innerText();

      cartItems.push({
        itemName: name,
        itemPrice: price,
        quantity: Number(quantity),
      });
    }

    return cartItems;
  }

  async getAllItemsCount() {
    const cartItemLocators = await this.cartContent.locator(":scope > div");
    const cartItemCount = await cartItemLocators.count();
    return cartItemCount;
  }

  async removeAll() {
    await this.removeAllBtn.click();
  }
}
