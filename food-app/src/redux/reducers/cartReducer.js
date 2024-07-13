import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstants";

// Retrieve cart from localStorage or initialize as an empty array
const initialCart = JSON.parse(localStorage.getItem('cart')) || [];

const initialState = {
  cart: initialCart,
};
// console.log("cart is :"+initialCart);
const cartReducer = (state = initialState, action) => {
  console.log('Reducer Action:', action); // Debugging Log
  console.log('Current State:', state); // Debugging Log

  switch (action.type) {
    case ADD_TO_CART:
      // Check if the item already exists in the cart
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      let updatedCart;
      if (itemIndex >= 0) {
        // Item already in cart, update its quantity
        updatedCart = state.cart.map((item, index) =>
          index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // New item, add to cart
        updatedCart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
      // Update localStorage with the updated cart
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };

    case REMOVE_FROM_CART:
      // Remove item from cart
      const filteredCart = state.cart.filter(item => item.id !== action.payload.id);
      // Update localStorage with the filtered cart
      localStorage.setItem('cart', JSON.stringify(filteredCart));
      return { ...state, cart: filteredCart };

    default:
      return state;
  }
};

export default cartReducer;
