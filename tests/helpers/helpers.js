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

