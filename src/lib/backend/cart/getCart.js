import { connectDB } from "../connectDB";

export const getCartByUserId = async (userId) => {
  const db = await connectDB();
  const cart = await db.collection("carts").findOne({ userId });

  if (!cart) {
    throw new Error("Cart not found");
  }

  return cart;
};
