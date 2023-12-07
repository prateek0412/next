"use client";
import { fetchProducts } from "@/store/products/productsSlice";
import { AppDispatch, RootState } from "@/store/store";
import ProductsTable from "@/ui/components/products";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Home: React.FC = () => {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    // dispatch(fetchUserData());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Welcome to Dashboard</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: "3px",
        }}
      >
        {products.loading ? (
          <h3>Please wait product is being loaded....</h3>
        ) : (
          <ProductsTable />
        )}
      </div>
    </div>
  );
};

export default Home;
