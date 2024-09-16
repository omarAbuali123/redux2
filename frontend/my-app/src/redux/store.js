// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;


import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // استخدم named import هنا
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
