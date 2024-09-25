import { connectDB } from "@/lib/backend/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export const GET = async (req, { params }) => {
  const { id } = params;
  const query = { _id: new ObjectId(id) };
  try {
    const db = await connectDB();
    const response = await db.collection("products").findOne(query);
    return NextResponse.json(
      { success: true, product: response },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Something Went Wrong", err },
      { status: 500 }
    );
  }
};
