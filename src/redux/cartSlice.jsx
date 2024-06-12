import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

export const { increment, decrement, setTotalPrice } = cartSlice.actions;
export default cartSlice.reducer;
