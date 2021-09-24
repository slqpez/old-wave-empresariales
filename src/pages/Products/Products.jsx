import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProductsList from "../../components/ProductsList/ProductsList";
import FilterAside from "../../components/FilterAside/FilterAside";
import productsStyles from "./products.module.css";

function Products() {
  
  const {product}= useParams()
  const [paths, SetPaths] = useState([product.split("-")[0]]);

  useEffect(() => {
   SetPaths([product.split("-")[0]])
  }, [product])

  return (
    <div className={productsStyles.container}>
      <Link to="/">Home &gt; </Link>
      {paths.map((path, i) => (
        <Link to="/" key={i}>{path}</Link> //TODO cambiar la ruta
      ))}
      <div className={productsStyles.content}>
        <FilterAside />
        <ProductsList></ProductsList>
      </div>
    </div>
  );
}

export default Products;
