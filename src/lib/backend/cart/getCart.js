import { ObjectId } from "mongodb";
import { connectDB } from "../connectDB";

export const getCartByUserId = async (userId) => {
  const db = await connectDB();

  // Fetch the user's cart from the "users" collection
  const user = await db
    .collection("users")
    .findOne({ _id: new ObjectId(userId) }, { projection: { cart: 1 } });

  if (!user || !user.cart) {
    // Return a default cart structure if no cart is found
    return {
      items: [],
      last_updated: Date.now(),
      message: "No cart found. Returning an empty cart.",
    };
  }

  const { items, last_updated } = user.cart; // Extract the last_updated field

  // Fetch product details for each item in the cart
  const updatedItems = await Promise.all(
    items.map(async (item) => {
      const product = await db
        .collection("products") // Assuming you have a products collection
        .findOne(
          { _id: item.product_id },
          {
            projection: {
              medicine_name: 1,
              generic_name: 1,
              medicine_image: 1,
              is_available: 1,
            },
          }
        );

      // If product is unavailable, return null
      if (!product || !product.is_available) {
        return null; // This item will be filtered out later
      }

      // Return updated item with product details
      return {
        product_id: item.product_id,
        unit_type: item.unit_type,
        quantity: item.quantity,
        price_per_unit: item.price_per_unit,
        added_at: item.added_at,
        medicine_name: product.medicine_name,
        generic_name: product.generic_name,
        medicine_image: product.medicine_image,
      };
    })
  );

  // Filter out unavailable products (null values)
  const filteredItems = updatedItems.filter((item) => item !== null);

  // If no items were removed, return the cart with the original last_updated date
  if (filteredItems.length === items.length) {
    return {
      items: filteredItems,
      last_updated, // Return the existing last_updated value
      message: "Cart fetched successfully.",
    };
  }

  // Update the cart in the database if any items were removed
  await db.collection("users").updateOne(
    { _id: new ObjectId(userId) },
    {
      $set: {
        "cart.items": filteredItems,
        "cart.last_updated": Date.now(), // Update last_updated
      },
    }
  );

  // Return the updated cart with the new last_updated value
  return {
    items: filteredItems,
    last_updated:
      filteredItems.length === items.length ? last_updated : Date.now, // Return the new last_updated date
    message: "Cart updated due to unavailable products.",
  };
};
