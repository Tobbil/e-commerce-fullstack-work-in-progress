// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("Navbar tests", () => {
  test("navbar has correct number of menu items", async ({ page }) => {
    const expectedNumOfMenuItems = 4;
    await page.goto("/");
    const liItems = page.locator("ul").locator("li");
    await expect(liItems).toHaveCount(expectedNumOfMenuItems);
  });

  test("navbar has correct text", async ({ page }) => {
    await page.goto("/");
    const numOfMenuItems = await page.locator("ul").locator("li").count();
    const expectedText = {
      0: "HOME",
      1: "HEADPHONES",
      2: "SPEAKERS",
      3: "EARPHONES",
    };

    for (let i = 0; i < numOfMenuItems; i++) {
      const menuItem = page.locator("ul").first().locator("li").nth(i);
      console.log(`Expecting ${menuItem} to have text ${expectedText[i]}`);
      await expect(menuItem).toHaveText(expectedText[i]);
    }
  });

  test("navbar menu links", async ({ page }) => {
    await page.goto("/");
    const numOfMenuItems = await page.locator("ul").locator("li").count();
    const urls = {
      HOME: "/",
      HEADPHONES: "/headphones",
      SPEAKERS: "/speakers",
      EARPHONES: "/earphones",
    };

    for (let i = 0; i < numOfMenuItems; i++) {
      const menuItem = page.locator("ul").first().locator("li").nth(i);
      const itemText = await menuItem.textContent();
      const expectedUrl = urls[itemText];
      await menuItem.click();
      await expect(page).toHaveURL(expectedUrl);
    }
  });

  test("cart icon link", async ({ page }) => {
    await page.goto("/")
    const expectedUrl = "/cart";
    const cartIcon = page.getByRole("link", { name: "Basket icon" });
    await cartIcon.click();
    await expect(page).toHaveURL(expectedUrl);
  });
});
