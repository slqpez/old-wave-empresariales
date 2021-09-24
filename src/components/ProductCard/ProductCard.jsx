import React from "react";
import productsCardStyles from "./productCard.module.css";
import Prueba from "../../assets/desktop/producto1@2x.png";

function ProductsCard() {
  return (
    <div className={productsCardStyles.ProductCard}>
      <img src={Prueba} alt="" />
      <div className={productsCardStyles.ProductCardInformation}>
        <p className={productsCardStyles.ProductCardInformation_title}>El titulo del producto Lorem ipsum dolor</p>
        <h4 className={productsCardStyles.ProductCardInformation_seller}>Samsung</h4>
        <div className={productsCardStyles.Price_Container}>
          <s>$1'500.000</s>
          <p>$1'000.000</p>
         {/*  <p>$500.000</p> */}
        </div>
        <button className={productsCardStyles.ProductCard_btn}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ProductsCard;
