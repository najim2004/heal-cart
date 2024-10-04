import { connectDB } from "../connectDB";

export const updateCartQuantity = async (
  userId,
  productId,
  quantityChange,
  unit
) => {
  const db = await connectDB();

  // Fetch the user's cart
  const user = await db
    .collection("users")
    .findOne({ _id: userId }, { projection: { cart: 1 } });

  if (!user || !user.cart) {
    throw new Error("Cart not found");
  }

  const { items } = user.cart;

  // Find the index of the item to update
  const itemIndex = items.findIndex(
    (item) => item.product_id.equals(productId) && item.unit_type === unit
  );

  if (itemIndex === -1) {
    throw new Error("Product not found in the cart");
  }

  const currentQuantity = items[itemIndex].quantity;

  // Prevent decrementing below 1
  if (quantityChange < 0 && currentQuantity === 1) {
    throw new Error("Cannot decrement quantity below 1");
  }

  // Update the quantity
  items[itemIndex].quantity += quantityChange;

  // Update the cart in the database
  await db
    .collection("users")
    .updateOne(
      { _id: userId },
      { $set: { "cart.items": items, "cart.last_updated": Date.now() } }
    );

  return {
    success: true,
    updatedCart: {
      ...user.cart,
      items,
    },
    message: "Cart updated successfully",
  };
};
