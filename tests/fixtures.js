import { test as baseTest } from "@playwright/test";

export const test = baseTest.extend({
  addOneToCart: async ({ page }, use) => {
    const itemId = 1;
    await page.goto(`/item/${itemId}`);
    const itemName = await page
      .locator('[data-testid="qa-product-name"]')
      .innerText();
    const itemPriceElement = await page
      .locator('[data-testid="qa-add-to-cart-box"]')
      .locator(':has-text("$")')
      .innerText();
    const itemPrice = itemPriceElement.replace("$ ", "");
    const addToCartBtn = page.getByRole("button", { name: "ADD TO CART" });
    const quantity = Number(await page.getByLabel("Quantity").inputValue());
    expect(quantity).toBe(1);
    await addToCartBtn.click();

    const cartIcon = page.getByRole("img", { name: "Basket icon" });
    await cartIcon.click();

    const cartContent = page.locator('[data-testid="qa-cart-items"]');
    const cartItems = cartContent.locator(":scope > div");
    await expect(cartItems).toHaveCount(1);

    const data = { itemName, itemPrice, quantity };
    await use(data);
  },
});

export const expect = test.expect;
