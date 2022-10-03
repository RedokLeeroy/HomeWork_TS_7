import { configureStore } from '@reduxjs/toolkit';
import { mainReducer } from './reducer';

const store = configureStore({
  reducer: mainReducer,
});
export { store };

export type RootState = ReturnType<typeof store.getState>; 

export type AppDispatch = typeof store.dispatch;
