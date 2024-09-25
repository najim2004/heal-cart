import { connectDB } from "../connectDB";

export const updateCartQuantity = async (
  userId,
  productId,
  quantityChange,
  unit
) => {
  const db = await connectDB();
  const cart = await db.collection("carts").findOne({ userId });

  if (!cart) {
    throw new Error("Cart not found");
  }

  const itemIndex = cart.items.findIndex(
    (item) => item.product_id === productId && item.unit === unit
  );

  if (itemIndex === -1) {
    throw new Error("Product not found in the cart");
  }

  const currentQuantity = cart.items[itemIndex].quantity;

  if (quantityChange < 0 && currentQuantity === 1) {
    throw new Error("Cannot decrement quantity below 1");
  }

  cart.items[itemIndex].quantity += quantityChange;

  // Update the cart in the database
  await db
    .collection("carts")
    .updateOne({ userId }, { $set: { items: cart.items } });

  return cart; // Return the updated cart
};
