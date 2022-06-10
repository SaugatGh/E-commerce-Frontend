import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity = state.products.length;
      state.total = state.products?.reduce((acc, curr) => {
        acc += curr.quantity * curr.productId.price;
        return acc;
      }, 0);
    },
    removeCart: (state) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },

    addCart: (state, action) => {
      console.log(action.payload, "action payload");
    },

    updateCart: (state, action) => {},

    deleteCart: (state, action) => {},

    userCart: (state, action) => {},
    allUsercart: (state, action) => {
      state.products = action.payload;
      state.quantity = action.payload.length;
      state.total = action.payload?.reduce((acc, curr) => {
        acc += curr.quantity * curr.productId.price;
        return acc;
      }, 0);
    },
  },
});

export const {
  addProduct,
  removeCart,
  addCart,
  updateCart,
  deleteCart,
  userCart,
  allUsercart,
} = cartSlice.actions;
export default cartSlice.reducer;

// payload is basically a new product
