import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import image from "../../assets/desktop/producto1@2x.png";
import productDetailStyle from "./productDetail.module.css";
import {Link, useParams} from "react-router-dom"

function ProductDetail() {

    const {search, product}= useParams()

    console.log(search, product)
  
  return (
    <div className={productDetailStyle.detailContainer}>
      <Link to="/">Home</Link>
      <span> &gt;</span> 
      <Link to={"/products/" + search}>{search}</Link>
      <span> &gt;</span> 
      <Link to={"/products/" + search + "/" + product}>{product}</Link>

      <div className={productDetailStyle.detailContent}>
      <div className={productDetailStyle.imagesContainer}>
        <div className={productDetailStyle.imageContainer}>
          <img src={image} alt="Product image" />
        </div>
        <div className={productDetailStyle.imageContainer}>
          <img src={image} alt="Product image" />
        </div>
        <div className={productDetailStyle.imageContainer}>
          <img src={image} alt="Product image" />
        </div>
        <div className={productDetailStyle.imageContainer}>
          <img src={image} alt="Product image" />
        </div>
        <div className={productDetailStyle.imageContainer}>
          <img src={image} alt="Product image" />
        </div>
      </div>
      <div className={productDetailStyle.mainImage}>
        <img src={image} alt="Product image" />
      </div>
      <div className={productDetailStyle.infoProductContainer}>
        <h3>El nombre del producto</h3>

        <p>Iphone</p>
        <p>Medellín</p>
        <p>$100.000</p>

        <div>
          <h4>Vendedor</h4>
          <p>Logo del vendedor</p>
        </div>
      </div>

      <div className={productDetailStyle.descriptionContainer}>
        <h3>Descripción del producto</h3>
      </div>
      </div>
     
    </div>
  );
}

export default ProductDetail;
