export default class Navbar {
  constructor(page) {
    this.page = page;
    this.cartIcon = page.getByRole("img", { name: "Basket icon" });
    this.menu = page.getByTestId("navbar-menu");
    this.homeButton = this.menu.getByText("HOME");
  }

  async clickCartIcon() {
    await this.cartIcon.click();
  }

  async clickHomeButton() {
    await this.homeButton.click();
  }
}
