import { test, expect } from "@playwright/test";

test.describe("cart tests", () => {
  test("cart can be opened and closed", async ({ page }) => {
    await page.goto("/");
    const cartIcon = page.getByRole("img", { name: "Basket icon" });
    await cartIcon.click();
    const cartModal = page.locator('[data-testid="cart-modal"]');
    await expect(cartModal).toBeVisible();
    await cartIcon.click();
    await expect(cartModal).not.toBeVisible();
  });

  test("cart starts with 0 items", async ({ page }) => {
    await page.goto("/");
    const cartIcon = page.getByRole("img", { name: "Basket icon" });
    await cartIcon.click();
    const cartContent = page.locator('[data-testid="cart-items"]');
    const cartItems = cartContent.locator(":scope > div");
    await expect(cartItems).toHaveCount(0);
  });
});
