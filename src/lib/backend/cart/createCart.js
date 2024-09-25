import { connectDB } from "../connectDB";

export const createCart = async (userId, product) => {
  const db = await connectDB();

  // Fetch existing cart or create a new one
  const existingCart = (await db.collection("carts").findOne({ userId })) || {
    items: [],
  };

  // Check for existing product in the cart
  const itemIndex = existingCart.items.findIndex(
    (item) =>
      item.product_id === product.product_id && item.unit === product.unit
  );

  if (itemIndex !== -1) {
    // Update quantity if product exists
    existingCart.items[itemIndex].quantity += product.quantity || 1;
  } else {
    // Add new product to the cart
    existingCart.items.push({
      quantity: product.quantity || 1,
      unit: product.unit || "pieces",
      price: product.price,
      generic_name: product.generic_name,
      medicine_image: product.medicine_image,
      medicine_name: product.medicine_name,
      product_id: product.product_id,
    });
  }

  // Update or insert the cart in the database
  await db.collection("carts").updateOne(
    { userId },
    { $set: { items: existingCart.items } },
    { upsert: true } // Create if not exists
  );

  return {
    success: true,
    cart: existingCart,
    message:
      itemIndex !== -1
        ? "Quantity updated for existing product"
        : "Product added to the cart",
  };
};
