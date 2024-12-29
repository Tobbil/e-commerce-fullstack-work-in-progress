import { useEffect, useState } from "react";

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
  const [item, setItem] = useState(null);
  useEffect(() => {
    async function getItem() {
      try {
        const response = await fetch(`/api/item?id=${id}`);
        const item = await response.json();
        setItem(item[0]);
      } catch (error) {
        console.error("Error fetching item!");
      }
    }
    getItem();
  }, []);
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
