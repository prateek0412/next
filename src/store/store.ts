"use client";

import { configureStore, Middleware } from "@reduxjs/toolkit";
import counterReducer from "./feature/counter/counterSlice";
import productsSlice, { fetchProducts } from "./products/productsSlice";
import authSlice from '../redux/auth/authSlice';

const loggingMiddleware: Middleware = (storeAPI) => (next) => (action: any) => {
  if (action.type === fetchProducts.pending.type) {
    // This block will intercept when fetchProducts is called
    console.log('fetchProducts is pending');
    // You can perform actions here before the API call

    // Example condition to stop the action
    const state: RootState = storeAPI.getState();
    if (Math.ceil(Math.random() * 1000) % 2 === 0) {
      console.log('Stopping fetchProducts action...');
      return; // Prevent further processing of the action by not calling next(action)
    }
  } else if (action.type === fetchProducts.fulfilled.type) {
    // This block will intercept when fetchProducts is completed successfully
    console.log('fetchProducts is fulfilled');
    // You can perform actions here after the API call is completed successfully
  } else if (action.type === fetchProducts.rejected.type) {
    // This block will intercept when fetchProducts is completed with an error
    console.log('fetchProducts is rejected');
    // You can perform actions here if the API call fails
  }

  return next(action);
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsSlice,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) => {
    // Customize middleware here if needed
    return getDefaultMiddleware().concat(loggingMiddleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
