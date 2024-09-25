import { connectDB } from "../connectDB";
import bcrypt from "bcrypt";
const newUser = {
  profile: {
    full_name: "",
    email: "",
    phone_number: null,
    avatar: null,
  },
  auth: {
    password_hash: null,
    password_salt: null,
    last_login: null,
    login_attempts: 0,
    lock_until: null,
  },
  address: {
    billing: {
      street: "",
      city: "",
      postal_code: "",
      country: "",
    },
    shipping: {
      street: "",
      city: "",
      postal_code: "",
      country: "",
    },
  },
  orders: [],
  cart: {
    items: [],
    last_updated: Date.now(),
  },
  favorites: [],
  notifications: [],
  role: "user",
  settings: {
    newsletter_subscribed: false,
    preferred_language: "en",
  },
  createdAt: Date.now(),
  updatedAt: Date.now(),
};

export const signUp = async (newUserData) => {
  const { fullName, email, password } = newUserData;
  const db = await connectDB();
  const userCollection = db.collection("users");

  const exist = await userCollection.findOne({ "profile.email": email });
  if (exist) {
    throw new Error("User already exists");
  }

  const hashedPassword = bcrypt.hashSync(password, 14);
  newUser.profile.full_name = fullName;
  newUser.profile.email = email;
  newUser.auth.password_hash = hashedPassword;

  const res = await userCollection.insertOne(newUser);
  if (!res?.insertedId) {
    throw new Error("Failed to register user");
  }
  return res;
};
