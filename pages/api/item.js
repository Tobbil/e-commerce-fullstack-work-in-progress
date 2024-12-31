import { supabase } from "../../lib/supabase";
import { toCamelCase } from "../../utils/utils";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    return res.status(200).send("OK");
  }

  const { id, name } = req.query;

  if (!id && !name) {
    return res.status(400).json({ error: "Missing 'id' or 'name' parameter" });
  }

  try {
    let query = supabase.from("products").select("*");

    if (id) {
      query = query.eq("id", id);
    } else if (name) {
      query = query.ilike("name", `%${name}%`); // Use ilike for case-insensitive search
    }

    const { data, error } = await query;

    if (error) throw error;

    const dataTransformed = toCamelCase(data);

    // If no data is found, return a 404
    if (!data || data.length === 0) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json(dataTransformed);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
