// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import categoriesReducer from "./slices/categoriesSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    categories: categoriesReducer,
  },
});
