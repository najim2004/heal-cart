import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.items = action.payload.items;
    },
  },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
