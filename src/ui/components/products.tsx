"use client";
import { ProductDetail } from "@/store/products/productsSlice";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
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

const Product: React.FC<ProductDetail> = (props) => {
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
      <img src={props.images[0]} style={{ width: "100%" }} />
    </div>
  );
};

export default ProductsTable;
