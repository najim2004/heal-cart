import { getUser } from "@/lib/backend/user/getUser";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id: userId } = params;

  try {
    const user = await getUser(userId);

    return NextResponse.json({ success: true, user }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};
