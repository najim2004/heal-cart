import { signUp } from "@/lib/backend/user/signUp";
import { NextResponse } from "next/server";
export const POST = async (req) => {
  const newUser = await req.json();
  try {
    const res = await signUp(newUser);
    return NextResponse.json(
      { success: true, message: "Successfully Registered!", res },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: err.message, err });
  }
};
