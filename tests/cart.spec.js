import { test, expect } from "./fixtures";
import { getItemFromDBByName } from "./helpers/helpers";

test.describe("cart tests", () => {
  test("cart can be opened and closed", async ({ page }) => {
    await page.goto("/");
    const cartIcon = page.getByRole("img", { name: "Basket icon" });
    await cartIcon.click();
    const cartModal = page.locator('[data-testid="qa-cart-modal"]');
    await expect(cartModal).toBeVisible();
    await cartIcon.click();
    await expect(cartModal).not.toBeVisible();
  });

  test("cart starts with 0 items", async ({ page }) => {
    await page.goto("/");
    const cartIcon = page.getByRole("img", { name: "Basket icon" });
    await cartIcon.click();
    const cartContent = page.locator('[data-testid="qa-cart-items"]');
    const cartItems = cartContent.locator(":scope > div");
    await expect(cartItems).toHaveCount(0);
  });

  test("item can be correctly added to cart", async ({
    addOneToCart,
    context,
    page,
  }) => {
    const { itemName, itemPrice, quantity } = addOneToCart;
    const itemNameCart = await page
      .getByTestId("qa-cart-product-name")
      .innerText();
    const itemDB = await getItemFromDBByName(context, itemName);
    expect(itemNameCart).toBe(itemDB.shortName.toUpperCase());

    const itemPriceCartElement = await page
      .getByTestId("qa-cart-item-0")
      .getByText("$")
      .innerText();
    const itemPriceCart = itemPriceCartElement.replace("$", "");
    expect(itemPriceCart).toBe(itemPrice);

    const quantityCart = Number(
      await page.getByTestId("qa-cart-quantity").innerText()
    );
    expect(quantityCart).toBe(quantity);
  });

  test("item can be removed from cart", async ({ addOneToCart, page }) => {
    const removeButton = page.getByTestId("qa-cart-item-0").getByText("-");
    await removeButton.click();

    const cartContent = page.locator('[data-testid="qa-cart-items"]');
    const cartItems = cartContent.locator(":scope > div");
    await expect(cartItems).toHaveCount(0);
  });

  test("cart item number indicator is updated correctly", async ({
    addOneToCart,
    page,
  }) => {
    const numberIndicator = page.locator("nav").locator(".rounded-full");
    const removeButton = page.getByTestId("qa-cart-item-0").getByText("-");
    const addButton = page.getByTestId("qa-cart-item-0").getByText("+");
    expect(numberIndicator).toHaveText("1");
    await addButton.click();
    expect(numberIndicator).toHaveText("2");
    await removeButton.click();
    expect(numberIndicator).toHaveText("1");
    await removeButton.click();
    expect(numberIndicator).toBeHidden();
  });
});
