"use client";
import { ProductDetail } from "@/store/products/productsSlice";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import Image from 'next/image';

const ProductsTable: React.FC = () => {
  const products = useSelector((state: RootState) => state.products);
  return (
    <>
      {products.value.length ? (
        products.value.map((product) => {
          return <Product key={product.id} {...product} />;
        })
      ) : (
        <>No Products</>
      )}
    </>
  );
};

export const Product: React.FC<ProductDetail> = (props) => {
  // const products = useSelector((state: RootState) => state.products);
  return (
    <div
      style={{
        width: "200px",
        //height: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        border: "solid",
        borderRadius: "8px",
      }}
    >
      
      <p>{props.brand}</p>
      <Image src={props.images[0]} width={100} height={150} alt="product-image" />
    </div>
  );
};

export default ProductsTable;
