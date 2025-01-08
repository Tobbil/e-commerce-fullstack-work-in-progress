import ItemPage from "../page-objects/ItemPage";

export async function getItemFromDBById(context, id) {
  let item;
  try {
    const response = await context.request.get(`/api/item?id=${id}`);
    item = await response.json();
  } catch (error) {
    console.error("Error fetching item!");
  }
  return item;
}

export async function getItemFromDBByName(context, name) {
  let item;
  try {
    const response = await context.request.get(`/api/item?name=${name}`);
    item = await response.json();
  } catch (error) {
    console.error("Error fetching item!");
  }
  return item[0];
}

export async function getShortItemNameFromDB(context, name) {
  const item = await getItemFromDBByName(context, name);
  return item.shortName;
}

export async function addItemToCartByID(context, page, id) {
  const itemPage = new ItemPage(page);
  await page.goto(`/item/${id}`);
  const item = {
    itemName: (
      await getShortItemNameFromDB(context, await itemPage.getItemName())
    ).toUpperCase(),
    itemPrice: await itemPage.getItemPrice(),
    quantity: await itemPage.getQuantity(),
  };
  await itemPage.addToCart();
  return item;
}
