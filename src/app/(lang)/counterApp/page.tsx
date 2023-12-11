"use client";
import React from "react";
import type { AppDispatch, RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  fetchUserData,
} from "@/store/feature/counter/counterSlice";
import { useEffect } from "react";
const Home: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  const products = useSelector((state: RootState) => state.products.value);
  return (
    <>
      <h1>Welcome to counter App</h1>
      <button data-testid="increment" onClick={() => dispatch(increment())}>Increment</button>
      <span data-testid="count">{count}</span>
      <button data-testid="decrement" onClick={() => dispatch(decrement())}>Decrement</button>
      <button data-testid="increment-by-two" onClick={() => dispatch(incrementByAmount(2))}>
        Increment by two
      </button>
    </>
  );
};

export default Home;
