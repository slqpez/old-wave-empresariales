import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import image from "../../assets/desktop/producto1@2x.png";
import productDetailStyle from "./productDetail.module.css";
import { Link, useParams } from "react-router-dom";

function ProductDetail() {
  const { search, product } = useParams();

  console.log(search, product);

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
          <h3 className={productDetailStyle.infoProductName}>
            El nombre del producto
          </h3>
          <p className={productDetailStyle.infoProductPrice}>$100.000</p>

          <p>Iphone</p>
          <p>Medellín</p>

          <div>
            <h4>Vendedor</h4>
            <p>Logo del vendedor</p>
          </div>
          <button className={productDetailStyle.Detail_btn}>Agregar al carrito</button>
        </div>
      </div>
      <hr className={productDetailStyle.DetailHr} />
      <div className={productDetailStyle.descriptionContainer}>
        <h3>Descripción del producto</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate in
          quia ipsum labore. Ad magni obcaecati delectus illo repudiandae,
          doloribus provident pariatur corrupti, eveniet atque sit ex temporibus
          iusto! A. Exercitationem deleniti facere esse enim dolorum nihil illum
          qui inventore doloremque eos illo dolore expedita animi debitis optio
          minus rem, ipsam tenetur placeat ducimus quidem numquam ut! Provident,
          nesciunt deleniti! Hic consequuntur sint quaerat excepturi rerum sequi
          expedita, alias aliquam consectetur, et omnis. Voluptates culpa
          nostrum sequi nulla tenetur, odio optio sit nemo dolor ipsam porro
          ipsum dolore voluptatibus cumque.
        </p>
      </div>
    </div>
  );
}

export default ProductDetail;
