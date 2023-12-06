"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  products: any;
  loading: boolean;
  error: string | undefined | null;
}

const initialState: CounterState = {
  value: 0,
  products: null,
  loading: false,
  error: null,
};

// Async action using Thunk
export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    // Perform an API call or asynchronous operation
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for handling the async action lifecycle
    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer; // counterReducer
