import { connectDB } from "../connectDB";

export const removeItemFromCart = async (userId, productId, unit) => {
  const db = await connectDB();

  // Fetch the user's cart
  const user = await db
    .collection("users")
    .findOne({ _id: userId }, { projection: { cart: 1 } });

  if (!user || !user.cart) {
    throw new Error("Cart not found");
  }

  const { items } = user.cart;

  // Filter out the item to be removed
  const updatedItems = items.filter(
    (item) => !(item.product_id.equals(productId) && item.unit_type === unit)
  );

  // Update the cart in the database
  await db
    .collection("users")
    .updateOne(
      { _id: userId },
      { $set: { "cart.items": updatedItems, "cart.last_updated": Date.now() } }
    );

  return {
    success: true,
    updatedItems,
    message:
      updatedItems.length < items.length
        ? "Item removed from cart"
        : "Item not found in cart",
  };
};
