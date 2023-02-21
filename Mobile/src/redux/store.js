import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers/Index';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;