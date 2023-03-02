import { loginFailure, loginStart, loginSuccess } from "./userRedux";

import { registerFailure, registerStart, registerSuccess } from "./userRedux";
import { addCart, allUsercart, deleteCart, removeCart } from "./cartRedux";

import { publicRequest, userRequest } from "../requestMethod";

// LOGIN
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

// REGISTER
export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

//  CREATE cart
export const createCart = async (dispatch, data) => {
  const reqData = {
    productId: data._id,
    quantity: data.quantity,
    color: data.color,
    size: data.size,
  };
  try {
    await userRequest.post("/carts", reqData);
  } catch (err) {}
};

// Remove all  Cart
export const clearCart = async (dispatch) => {
  try {
    const res = await userRequest.delete("/carts");
    dispatch(removeCart(res.data));
  } catch (err) {}
};

// Remove one item from cart
export const deleteCartById = (id) => (dispatch) => {
  dispatch(deleteCart(id));
};

// GET ALL CART
export const getMyCarts = async (dispatch) => {
  try {
    const res = await userRequest.get("/carts/find");
    dispatch(allUsercart(res.data));
  } catch (err) {}
};
