'use client';
import { UI_TEXT } from '@/common/constants/constants';
import { fetchProducts } from '@/store/products/productsSlice';
import { AppDispatch, RootState } from '@/store/store';
import ProductsTable from '@/ui/components/products';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDictionary } from '../../../dictionaries/dictionaries';

const Home: React.FC = ({ params }: any) => {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();
  const t = getDictionary(params.lang);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>{t[UI_TEXT.WELCOME_TO_DASHBOARD]}</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          gap: '3px',
        }}
      >
        {products.loading ? (
          <h3>{t[UI_TEXT.PLEASE_WAIT_PRODUCT_IS_LOADING]}</h3>
        ) : (
          <ProductsTable />
        )}
      </div>
    </div>
  );
};

export default Home;
