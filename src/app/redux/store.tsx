// store.tsx

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

/**
 * The Redux store for the application.
 */
const store = configureStore({
  reducer: rootReducer,
});

export default store;