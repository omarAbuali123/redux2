import { combineReducers } from 'redux';
import { authReducer } from './authReducer';  // استخدام named export
import { productReducer } from './productReducer';  // استخدام named export

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
});

export default rootReducer;
