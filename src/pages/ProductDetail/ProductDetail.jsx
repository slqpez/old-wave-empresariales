import React,{useEffect, useState} from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import image from "../../assets/desktop/producto1@2x.png";
import productDetailStyle from "./productDetail.module.css";
import {Link, useParams} from "react-router-dom"
import {getProductByID} from "../../services/products"

function ProductDetail() {

    const {search, product, id}= useParams()
    const [dataProduct,setDataProduct] = useState()

   useEffect(() => {
    getProductByID(id)
    .then(data=> setDataProduct(data))
   },[])

  console.log(dataProduct)
  return (
    <div className={productDetailStyle.detailContainer}>
      <Link to="/">Home</Link>
      <span> &gt;</span> 
      <Link to={"/products/" + search}>{search}</Link>
      <span> &gt;</span> 
      <Link to={"/products/" + search + "/" + product +"/" +id}>{product}</Link>

      <div className={productDetailStyle.detailContent}>
      <div className={productDetailStyle.imagesContainer}>
        {/* <div className={productDetailStyle.imageContainer}>
          <img src={image} alt="Product image" />
        </div> */}
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
        <h3>{dataProduct.name}</h3>

        <p>{dataProduct.brand}</p>
        <p>{dataProduct.city.name}</p>
        <p> {Intl.NumberFormat("es-CO", {
              style: "currency",
              currency: "COP",
              minimumFractionDigits: 0,
            }).format(dataProduct.price)}</p>

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
