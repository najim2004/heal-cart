import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";
export const GET = async (req) => {
  try {
    const db = await connectDB();
    const userCollection = db.collection("categories");
    const response = await userCollection.find().toArray();
    return NextResponse.json(
      { success: true, categories: response },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Something Went Wrong", err },
      { status: 500 }
    );
  }
};
