import { test, expect } from "./fixtures";
import { addItemToCartByID, getShortItemNameFromDB } from "./helpers/helpers";
import ItemPage from "./page-objects/ItemPage";
import Navbar from "./page-objects/Navbar";
import Cart from "./page-objects/Cart";

test.describe("cart tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => localStorage.clear());
  });

  test("cart can be opened and closed", async ({ page }) => {
    const navbar = new Navbar(page);
    const cart = new Cart(page);
    await navbar.clickCartIcon();
    await expect(cart.cartModal).toBeVisible();
    await navbar.clickCartIcon();
    await expect(cart.cartModal).toBeHidden();
  });

  test("cart starts with 0 items", async ({ page }) => {
    const navbar = new Navbar(page);
    await navbar.clickCartIcon();
    const cartContent = page.locator('[data-testid="qa-cart-items"]');
    const cartItems = cartContent.locator(":scope > div");
    await expect(cartItems).toHaveCount(0);
  });

  test("item can be correctly added to cart", async ({
    addOneToCart,
    context,
    page,
  }) => {
    const { cart, itemName, itemPrice, quantity } = addOneToCart;

    const itemNameCart = await cart.getItemName(0);

    const itemShortName = await getShortItemNameFromDB(context, itemName);
    expect(itemNameCart).toBe(itemShortName.toUpperCase());

    const itemPriceCart = await cart.getItemPrice(0);
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
    await cart.increaseItemQuantity(0);
    expect(cart.numberIndicator).toHaveText("2");
    await cart.decreaseItemQuantity(0);
    expect(cart.numberIndicator).toHaveText("1");
    await cart.decreaseItemQuantity(0);
    expect(cart.numberIndicator).toBeHidden();
  });

  test("cart content is retained when changing pages", async ({
    addOneToCart,
    page,
  }) => {
    const { cart, navbar } = addOneToCart;
    const cartItemsBefore = await cart.cartItems.allInnerTexts();
    await navbar.clickHomeButton();
    await page.waitForLoadState("networkidle");
    await navbar.clickCartIcon();
    const cartItemsAfter = await cart.cartItems.allInnerTexts();
    expect(cartItemsAfter).toStrictEqual(
      cartItemsBefore,
      "Cart content was not retained when changing pages"
    );
  });

  test("multiple different items can be correctly added to cart", async ({
    addOneToCart,
    context,
    page,
  }) => {
    const itemTwoId = 2;
    const itemThreeId = 3;
    const { cart, itemName, navbar } = addOneToCart;
    const itemPage = new ItemPage(page);

    const itemOne = {
      itemName: (await getShortItemNameFromDB(context, itemName)).toUpperCase(),
      itemPrice: await itemPage.getItemPrice(),
      quantity: await itemPage.getQuantity(),
    };

    const itemTwo = await addItemToCartByID(context, page, itemTwoId)
    await navbar.clickCartIcon();
    await expect(cart.cartItems).toHaveCount(
      2,
      "Item count is different than expected"
    );

    const itemThree = await addItemToCartByID(context, page, itemThreeId)
    await navbar.clickCartIcon();
    await expect(cart.cartItems).toHaveCount(
      3,
      "Item count is different than expected"
    );
    const cartItems = await cart.getAllItems();
    expect([itemOne, itemTwo, itemThree]).toStrictEqual(cartItems);
  });

  test("'remove all' button removes all items from cart", async ({
    page,
    addOneToCart,
  }) => {
    const { cart, navbar } = addOneToCart;
    const itemTwoId = 2;
    const itemPage = new ItemPage(page);

    await page.goto(`/item/${itemTwoId}`);
    await itemPage.addToCart();
    await navbar.clickCartIcon();
    expect(await cart.getAllItemsCount()).toBe(2);
    await cart.removeAll();
    expect(await cart.getAllItemsCount()).toBe(0);
  });
});

// cases:
// total sum is correct and changes

