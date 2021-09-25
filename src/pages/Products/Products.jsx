import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProductsList from "../../components/ProductsList/ProductsList";
import FilterAside from "../../components/FilterAside/FilterAside";
import productsStyles from "./products.module.css";

function Products() {
  
  const {search}= useParams()

  return (
    <div className={productsStyles.container}>
      <Link to="/">Home  </Link>
      <span>&gt;</span>
      <Link to={"/products/" + search}>{search}</Link>
      <div className={productsStyles.content}>
        <FilterAside />
        <ProductsList></ProductsList>
      </div>
    </div>
  );
}

export default Products;
