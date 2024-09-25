// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import categoriesReducer from "./slices/categoriesSlice";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    categories: categoriesReducer,
    cartItems: cartReducer,
    user: userReducer,
  },
});
