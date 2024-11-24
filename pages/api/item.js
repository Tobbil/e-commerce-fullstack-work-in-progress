import { supabase } from "../../lib/supabase";
import { toCamelCase } from "../../utils/utils";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    return res.status(200).send("OK");
  }
  const { id } = req.query;
  console.log("ID:", id);

  if (!id) {
    return res.status(400).json({ error: "Missing 'id' parameter" });
  }
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id);

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
