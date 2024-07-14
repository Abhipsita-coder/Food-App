import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../constants/cartConstants";

// Retrieve wishlist from localStorage or initialize as an empty array
const initialWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

const initialState = {
  wishlist: initialWishlist,
};

const wishlistReducer = (state = initialState, action) => {
  console.log('Reducer Action wishlist:', action); // Debugging Log
  console.log('Current State wishlist:', state); // Debugging Log

  switch (action.type) {
    case ADD_TO_WISHLIST:
      // Check if the item already exists in the wishlist
      const itemIndex = state.wishlist.findIndex(item => item.id === action.payload.id);
      let updatedWishlist;
      if (itemIndex >= 0) {
        // Item already in wishlist, update its quantity
        updatedWishlist = state.wishlist.map((item, index) =>
          index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // New item, add to wishlist
        updatedWishlist = [...state.wishlist, { ...action.payload, quantity: 1 }];
      }
      // Update localStorage with the updated wishlist
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      return { ...state, wishlist: updatedWishlist };

    case REMOVE_FROM_WISHLIST:
      // Remove item from wishlist
      const filteredWishlist = state.wishlist.filter(item => item.id !== action.payload.id);
      // Update localStorage with the filtered wishlist
      localStorage.setItem('wishlist', JSON.stringify(filteredWishlist));
      return { ...state, wishlist: filteredWishlist };

    default:
      return state;
  }
};

export default wishlistReducer;
