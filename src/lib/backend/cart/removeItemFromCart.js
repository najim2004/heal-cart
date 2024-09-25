import { connectDB } from "../connectDB";

export const removeItemFromCart = async (userId, productId, unit) => {
  const db = await connectDB();
  const cart = await db.collection("carts").findOne({ userId });

  if (!cart) {
    throw new Error("Cart not found");
  }

  const updatedItems = cart.items.filter(
    (item) => item.product_id !== productId && item.unit !== unit
  );

  await db
    .collection("carts")
    .updateOne({ userId }, { $set: { items: updatedItems } });

  return updatedItems; // Return the updated items
};
