import { test, expect } from "./fixtures";
import { getItemFromDBByName } from "./helpers/helpers";
import ItemPage from "./page-objects/ItemPage";
import Navbar from "./page-objects/Navbar";
import Cart from "./page-objects/Cart";

test.describe("cart tests", () => {
  test("cart can be opened and closed", async ({ page }) => {
    await page.goto("/");
    const navbar = new Navbar(page);
    const cart = new Cart(page);
    await navbar.clickCartIcon();
    await expect(cart.cartModal).toBeVisible();
    await navbar.clickCartIcon();
    await expect(cart.cartModal).toBeHidden();
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
    const { cart } = addOneToCart;
    expect(cart.numberIndicator).toHaveText("1");
    await cart.clickAddButton(0);
    expect(cart.numberIndicator).toHaveText("2");
    await cart.clickRemoveButton(0);
    expect(cart.numberIndicator).toHaveText("1");
    await cart.clickRemoveButton(0);
    expect(cart.numberIndicator).toBeHidden();
  });

  test("cart content is retained when changing pages", async ({
    addOneToCart,
    page,
  }) => {
    const { cart, navbar } = addOneToCart;
    const cartItemsBefore = await cart.cartItems.allInnerTexts();
    await navbar.clickHomeButton();
    const cartItemsAfter = await cart.cartItems.allInnerTexts();
    expect(cartItemsBefore).toStrictEqual(
      cartItemsAfter,
      "Cart content was not retained when changing pages"
    );
  });

  test("multiple different items can be added to cart", async ({
    addOneToCart,
    page,
  }) => {
    const itemOneId = 2;
    const itemTwoId = 3;
    const { cart, navbar } = addOneToCart;
    const itemPage = new ItemPage(page);
    console.log(await itemPage.getQuantity());
    await page.pause();
    await page.goto(`/item/${itemOneId}`);
  });
});

// cases:
// multiple items can be added to cart
// item count can be increased
// total sum is correct and changes
// "remove all" button works
//
