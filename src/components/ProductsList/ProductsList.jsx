import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import productsListStyles from "./producstList.module.css";

function ProductsList() {
  return (
    <div className={productsListStyles.productsList}>
      <ProductCard/>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default ProductsList;
