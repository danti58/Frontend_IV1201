// store.tsx

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

/**
 * Store
 */
const store = configureStore({
  reducer: rootReducer,
});

export default store;