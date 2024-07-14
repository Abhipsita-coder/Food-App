import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../constants/cartConstants";

export const addToWishList = (data) => ({
  type: ADD_TO_WISHLIST,
  payload: data,
});

export const removeFromWishList = (data) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: data,
});
