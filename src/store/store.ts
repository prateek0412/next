"use client";

import {
  configureStore,
  createAsyncThunk,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import counterReducer from "./feature/counter/counterSlice";
import thunk from "redux-thunk"; // Import Thunk middleware

const middleware = [...getDefaultMiddleware(), thunk];
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    middleware,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
