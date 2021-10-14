import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProductsList from "../../components/ProductsList/ProductsList";
import FilterAside from "../../components/FilterAside/FilterAside";
import productsStyles from "./products.module.css";
import useProducts from "../../hooks/useProducts";
import {getProductsFlask} from "../../services/products"

function Products() {
  const { search } = useParams();

  const [flaskProducts,setFlaskProducts]= useState([])

  const { products, loading, error,seller} = useProducts(search);

 /*  useEffect(()=>{
    getProductsFlask(search)
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
  },[]) */
 

  console.log(products)
  return (
    <div className={productsStyles.container}>
      <Link to="/">Home </Link>
      <span>&gt;</span>
      <Link to={"/products/" + search}>{search}</Link>
      <div className={productsStyles.content}>
        <FilterAside />
        <ProductsList products={products}search={search} seller={seller}></ProductsList>
      </div>
    </div>
  );
}

export default Products;
