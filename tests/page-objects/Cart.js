export default class Cart {
  constructor(page) {
    this.page = page;
    this.cartContent = this.page.locator('[data-testid="qa-cart-items"]');
    this.cartItems = this.cartContent.locator(":scope > div");
    this.numberIndicator = this.page.locator("nav .rounded-full");
    this.cartModal = this.page.locator('[data-testid="qa-cart-modal"]')
  }

  async clickRemoveButton(id) {
    await this.page.getByTestId(`qa-cart-item-${id}`).getByText("-").click();
  }

  async clickAddButton(id) {
    return this.page.getByTestId(`qa-cart-item-${id}`).getByText("+").click();
  }
}
