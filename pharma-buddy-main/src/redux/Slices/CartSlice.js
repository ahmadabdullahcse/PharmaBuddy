import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.cart.find(item => item._id === action.payload._id);
      console.log(action.payload._id, "action.payload._id", existing, "existing")
      if (existing) {
        state.cart = state.cart.map(item =>
          item._id === action.payload._id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.cart.push(action.payload);
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item._id !== action.payload._id);
    },

    incrementQty: (state, action) => {
      const { _id } = action.payload;
      // console.log(state.cart, "state.cart")
      // console.log(_id, "action.payload._id")

      const itemToIncrement = state.cart.find(item => item._id === _id);
      if (itemToIncrement) {
        itemToIncrement.qty += 1;
      }
    },

    decrementQty: (state, action) => {
      const { _id } = action.payload;
      const itemToDecrement = state.cart.find(item => item._id === _id);
      if (itemToDecrement && itemToDecrement.qty > 0) {
        itemToDecrement.qty -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } = CartSlice.actions;

export default CartSlice.reducer;
