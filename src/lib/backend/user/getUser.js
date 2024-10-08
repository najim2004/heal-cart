import { ObjectId } from "mongodb";
import { connectDB } from "../connectDB";

export const getUser = async (userId) => {
  const db = await connectDB();
  const user = await db
    .collection("users")
    .findOne({ _id: new ObjectId(userId) });
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};
