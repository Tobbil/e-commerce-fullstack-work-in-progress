import { test as baseTest } from "@playwright/test";
import Cart from "./page-objects/Cart";
import Navbar from "./page-objects/Navbar";
import ItemPage from "./page-objects/ItemPage";

export const test = baseTest.extend({
  addOneToCart: async ({ page }, use) => {
    const cart = new Cart(page);
    const navbar = new Navbar(page);
    const itemPage = new ItemPage(page);

    const itemId = 1;
    await page.goto(`/item/${itemId}`);
    const itemName = await itemPage.getItemName();
    const itemPrice = await itemPage.getItemPrice();
    const quantity = Number(await page.getByLabel("Quantity").inputValue());
    expect(quantity).toBe(1);
    await itemPage.addToCart();
    await navbar.clickCartIcon();
    await expect(cart.cartItems).toHaveCount(1); // zmien na sprawdzanie quantity?

    const testData = { cart, navbar, itemId, itemName, itemPrice, quantity };
    await use(testData);
  },
});

export const expect = test.expect;
