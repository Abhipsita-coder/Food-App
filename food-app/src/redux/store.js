// import { createStore, applyMiddleware, compose } from 'redux';
// import {thunk} from 'redux-thunk';
// import rootReducer from './reducers/cartReducer';
// import wishlistReducer from './reducers/wishlistReducer';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   wishlistReducer,
//   composeEnhancers(applyMiddleware(...middleware))
// );

// export default store;
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import cartReducer from './reducers/cartReducer';
import wishlistReducer from './reducers/wishlistReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
