export function toCamelCase(obj) {
  if (Array.isArray(obj)) {
    return obj.map(toCamelCase);
  } else if (obj && typeof obj === "object") {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      const camelKey = key.replace(/_([a-z])/g, (_, letter) =>
        letter.toUpperCase()
      );
      acc[camelKey] = toCamelCase(value);
      return acc;
    }, {});
  }
  return obj;
}

export async function getItemFromDB(id) {
  const baseUrl = "http://localhost:3000"
  let item;
  try {
    const response = await fetch(`${baseUrl}/api/item?id=${id}`);
    item = await response.json();
  } catch (error) {
    console.error("Error fetching item!");
  }
  return item;
}

export function convertPrice(price) {
  return price < 1000 ? price : new Intl.NumberFormat("en-US").format(price);
}

export function countAccessories(accessories) {
  const accessoriesMap = {};
  for (let i = 0; i < accessories.length; i++) {
    const accessory = accessories[i];
    const quantity = accessories.filter((x) => x === accessory).length;

    const formattedName = accessory
      .toLowerCase()
      .replace(/\b\w/g, (s) => s.toUpperCase());

    if (!accessoriesMap[accessory])
      accessoriesMap[accessory] = {
        name: formattedName,
        quantity: quantity,
      };
  }
  return accessoriesMap;
}
