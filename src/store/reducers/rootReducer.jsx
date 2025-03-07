

import { combineReducers } from 'redux';
import products from './productsReducer';
import cart from './cartReducer';
import paypal from './paypal';
import orders from './orderReducer'
import designers from './designers';
import stats from './statsReducer'
import packages from './packageReducers'
import designerData from './designerOrdersReducer';

const rootReducer = combineReducers({
  products: products,
  cart:cart,
  k:paypal,
  orders:orders,
  designers:designers,
  stats:stats,
  packages:packages,
  designerData:designerData
  
});

export default rootReducer;
