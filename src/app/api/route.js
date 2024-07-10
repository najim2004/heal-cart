import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
export const POST = async (req) => {
  const newUser = await req.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const exist = await userCollection.findOne({ email: newUser.email });
    if (exist) {
      return Response.json({ message: "User already exists" }, { status: 400 });
    }
    const hashedPassword = bcrypt.hashSync(newUser.password, 14);
    const res = await userCollection.insertOne({
      ...newUser,
      password: hashedPassword,
    });
    return Response.json({ message: "User Created", res }, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: "Something Went Wrong", err },
      { status: 500 }
    );
  }
};
