import { ObjectId } from "mongodb";
import { connectDB } from "../connectDB";

export const postCart = async (userId, product) => {
  const db = await connectDB();
  // Fetch the user's cart or create a new one
  const user = await db
    .collection("users")
    .findOne({ _id: new ObjectId(userId) }, { projection: { cart: 1 } });

  // If the user doesn't have a cart, initialize one
  const existingCart = user?.cart || { items: [], last_updated: Date.now() };

  // Check if the product already exists in the cart
  const itemIndex = existingCart.items.findIndex(
    (item) =>
      item.product_id.equals(product?.product_id) &&
      item.unit_type === product?.unit_type
  );

  if (itemIndex !== -1) {
    // Update quantity if the product already exists
    existingCart.items[itemIndex].quantity += product?.quantity || 1;
  } else {
    // Add the new product to the cart
    existingCart.items.push({
      product_id: product?.product_id,
      unit_type: product?.unit_type,
      quantity: product?.quantity || 1,
      price_per_unit: product.price_per_unit,
    });
  }

  // Update the last_updated field with the current timestamp
  existingCart.last_updated = Date.now();
  // Update the user's cart in the database and get the result
  const updateResult = await db
    .collection("users")
    .updateOne({ _id: new ObjectId(userId) }, { $set: { cart: existingCart } });

  // Check if the cart was successfully updated
  const success = updateResult.modifiedCount > 0;
  if (!success) {
    return {
      success: false,
      message: "Failed to update the cart. No changes were made.",
    };
  }
  return {
    success: true,
    updateResult,
    cart: existingCart,
    message:
      itemIndex !== -1
        ? "Quantity updated for existing product"
        : "Product added to the cart",
  };
};
