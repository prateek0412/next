'use client';
import React from 'react';
import type { AppDispatch, RootState } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from '@/store/feature/counter/counterSlice';
import { getDictionary } from '../../../dictionaries/dictionaries';
import { UI_TEXT } from '@/common/constants/constants';

const Home: React.FC = ({ params }: any) => {
  debugger;
  const t = getDictionary(params.lang);
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  const products = useSelector((state: RootState) => state.products.value);
  return (
    <>
      <h1>{t['Hi']}</h1>
      <h1>{t[UI_TEXT.THIS_IS_COUNTER_APP]}</h1>
      <button data-testid="increment" onClick={() => dispatch(increment())}>
        {t[UI_TEXT.INCREMENT]}
      </button>
      <span data-testid="count">{count}</span>
      <button data-testid="decrement" onClick={() => dispatch(decrement())}>
        {t[UI_TEXT.DECREMENT]}
      </button>
      <button
        data-testid="increment-by-two"
        onClick={() => dispatch(incrementByAmount(2))}
      >
        {t[UI_TEXT.INCREMENT_BY_TWO]}
      </button>
    </>
  );
};

export default Home;
