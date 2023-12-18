"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface ProductDetail {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: Array<string>;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

const initialState: {
  loading: boolean;
  error: string | undefined | null;
  value: Array<ProductDetail>;
} = {
  loading: true,
  error: null,
  value: [],
};

// Async action using Thunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    // intercept here before API hits using thunkAPI.getState()
    // Perform an API call or asynchronous operation
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for handling the async action lifecycle
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload.products;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer; // counterReducer
