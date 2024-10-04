import { postCart } from "@/lib/backend/cart/postCart";
import { NextResponse } from "next/server";
import { getCartByUserId } from "@/lib/backend/cart/getCart";
import { updateCartQuantity } from "@/lib/backend/cart/updateCartQuantity";
import { removeItemFromCart } from "@/lib/backend/cart/removeItemFromCart";

/*
userId:"66e7114d070d34787932b79b"
items:[
  {
  quantity:3,
  unit:'pieces',
  price:999.99
  generic_name:"Latest model with A15 Bionic chip",
  medicine_image:"https://example.com/images/iphone14.jpg",
  medicine_name:"Apple iPhone 14",
  product_id:"66e7114d070d34787932b79c"
  }
]
*/

// GET method
export const GET = async (req, { params }) => {
  const { id: userId } = params;

  try {
    const cart = await getCartByUserId(userId);

    return NextResponse.json({ success: true, cart }, { status: 200 });
  } catch (error) {
    console.error("Error fetching cart:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Server Error" },
      { status: error.message === "Cart not found" ? 404 : 500 }
    );
  }
};

// POST method
export const POST = async (req, { params }) => {
  const { id: userId } = params;
  const { product } = await req.json();
  try {
    const result = await postCart(userId, product);

    return NextResponse.json(result, {
      status: result.success
        ? result.message.includes("updated")
          ? 200
          : 201
        : 500,
    });
  } catch (error) {
    console.error("Error processing cart:", error);
    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );
  }
};

// PUT method
export const PUT = async (req, { params }) => {
  const { id: userId } = params;
  const { productId, quantityChange, unit } = await req.json();

  try {
    const updatedCart = await updateCartQuantity(
      userId,
      productId,
      quantityChange,
      unit
    );

    return NextResponse.json(
      { success: true, message: "Cart updated", cart: updatedCart },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating cart:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: error.message === "Cart not found" ? 404 : 400 }
    );
  }
};

// DELETE method
export const DELETE = async (req, { params }) => {
  const { id: userId } = params;
  const { productId, unit } = await req.json(); // Extract productId and unit

  try {
    const updatedItems = await removeItemFromCart(userId, productId, unit);

    return NextResponse.json(
      { success: true, message: "Item removed", items: updatedItems },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting item from cart:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: error.message === "Cart not found" ? 404 : 500 }
    );
  }
};
