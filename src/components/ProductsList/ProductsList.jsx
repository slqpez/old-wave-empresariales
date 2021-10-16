import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import productsListStyles from "./producstList.module.css";

function ProductsList({products, search,seller}) {


  if(!products) return <p>No se encontraron productos</p>

  return (
    <div className={productsListStyles.productsList} >
     {products?.map(product=><ProductCard key={product.name} name={product.name} brand={product.brand} price={product.price} image={product.thumbnail} search={search} id={product.id} seller={seller}></ProductCard> )}
    </div>
  );
}

export default ProductsList;
