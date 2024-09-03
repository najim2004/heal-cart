import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const query = {};
    const url = new URL(req.url);
    const {
      category_name,
      page = 1,
      limit = 10,
    } = Object.fromEntries(url.searchParams.entries());
    const skip = (page - 1) * limit;

    const categoryQueries = {
      "otc-medicine": ["Tablet", "capsule", "inhaler"],
      "womens-choice": ["Women's Choice", "pill"],
      "diabetic-care": [
        "Diabetics Care",
        "Insulin Needle",
        "Syringe",
        "Test Strip",
      ],
      "dental-care": [
        "Oral Past",
        "Mouthwash",
        "Toothpaste",
        "dental care",
        "Toothbrush",
      ],
      diapers: ["diapers"],
      supplement: ["supplement"],
      "sexual-wellness": ["Topical Gel", "Jelly", "sexual wellness"],
      "baby-care": ["Baby Care"],
    };

    category_name && categoryQueries[category_name]
      ? (query.category_name = {
          $in: categoryQueries[category_name].map(
            (item) => new RegExp(`^${item}$`, "i")
          ),
        })
      : {};

    const db = await connectDB();
    const products = await db
      .collection("products")
      .find(query)
      .skip(skip)
      .limit(parseInt(limit))
      .toArray();
    const categoryName = await db
      .collection("categories")
      .findOne({ slug: category_name }, { projection: { name: 1, _id: 0 } });
    return NextResponse.json(
      { success: true, products, category_name: categoryName?.name },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Something Went Wrong", err },
      { status: 500 }
    );
  }
};
