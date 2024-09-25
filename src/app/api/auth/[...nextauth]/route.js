import { connectDB } from "@/lib/backend/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error("Email and password are required");
        }

        const db = await connectDB();
        const userCollection = db.collection("users");

        const currentUser = await userCollection.findOne(
          { "profile.email": email },
          { projection: { profile: 1, auth: 1 } }
        );
        if (!currentUser) {
          throw new Error("No user found with the given email");
        }

        const valid = await bcrypt.compare(
          password,
          currentUser.auth.password_hash
        );
        if (!valid) {
          throw new Error("Invalid password");
        }

        // Return user object with additional properties if needed
        return {
          id: currentUser._id.toString(),
          email: currentUser.profile.email,
          phone_number: currentUser.profile.phone_number, // Add any additional fields here
          avatar: currentUser.profile.avatar, // Add any additional fields here
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.phone_number = token.phone_number;
        session.user.avatar = token.avatar;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.phone_number = user.phone_number;
        token.avatar = user.avatar;
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
