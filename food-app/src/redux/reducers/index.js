import { combineReducers } from 'redux';
import cartReducer from './cartReducer'; // Assuming this is where your cartReducer is defined

const rootReducer = combineReducers({
  cart: cartReducer, // Ensure 'cart' reducer is correctly included
  // Add other reducers as needed
});

export default rootReducer;
