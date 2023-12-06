"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counter/counterSlice";
import productsSlice from "./products/productsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsSlice,
  },
  middleware: (getDefaultMiddleware) => {
    // Customize middleware here if needed
    return getDefaultMiddleware();
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
