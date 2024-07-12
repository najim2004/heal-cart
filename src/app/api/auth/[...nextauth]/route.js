import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import credentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const handler = NextAuth({
  session: {
    strategy: "jwt",

    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    credentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }
        const db = await connectDB();
        const userCollection = db.collection("users");

        const currentUser = await userCollection.findOne({ email });
        if (!currentUser) {
          return null;
        }
        const valid = await bcrypt.compare(password, currentUser.password);
        if (!valid) {
          return null;
        }
        return currentUser;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
