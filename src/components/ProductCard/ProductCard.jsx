import React from "react";
import productsCardStyles from "./productCard.module.css";
import cartProductStyles from "./cartProduct.module.css";
import Prueba from "../../assets/desktop/producto1@2x.png";

function ProductsCard({cart}) {

  const styles = cart? cartProductStyles: productsCardStyles;
  return (
    <div className={styles.ProductCard}>
      <img src={Prueba} alt="" />
      <div className={styles.ProductCardInformation}>
        <p className={styles.ProductCardInformation_title}>El titulo del producto Lorem ipsum dolor</p>
        <h4 className={styles.ProductCardInformation_seller}>Samsung</h4>
        <div className={styles.Price_Container}>
          <s>$1'500.000</s>
          <p>$1'000.000</p>
         {/*  <p>$500.000</p> */}
        </div>

        {cart?<button className={styles.ProductCard_btn}>Borrar</button>:<button className={styles.ProductCard_btn}>Agregar al carrito</button>}
        
      </div>
    </div>
  );
}

export default ProductsCard;
