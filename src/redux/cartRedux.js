import { Satellite } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // cart:cartItems,
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
    //? Remove sigle cart item
    deleteCart: (state, action) => {
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
      state.quantity -= 1;
      state.total == action.payload.price * action.payload.quantity;
    },

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
