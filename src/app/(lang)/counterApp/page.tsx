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
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>
        Increment by two
      </button>
    </>
  );
};

export default Home;
