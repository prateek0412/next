"use client";
import Image from "next/image";
import type { RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "@/store/feature/counter/counterSlice";

export default function Home() {
  // const task = useStore((state) => state.tasks);
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Root Page
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>
        Increment by two
      </button>
    </main>
  );
}
