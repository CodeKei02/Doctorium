import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sidebar/sidebarSlice';
import consultoriosReducer from './consultorios/consultoriosSlice';
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    consultorios: consultoriosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 