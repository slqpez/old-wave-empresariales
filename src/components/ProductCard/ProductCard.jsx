import React from "react";
import productsCardStyles from "./productCard.module.css";
import cartProductStyles from "./cartProduct.module.css";
import {Link} from "react-router-dom"

function ProductsCard({cart, price, name, id, image, brand, search}) {

  const styles = cart? cartProductStyles: productsCardStyles;
  return (
    <Link to={"/products/" +search + "/" + name + "/" +id} className={styles.ProductCard}>
      <img src={image} alt=""/>
      <div className={styles.ProductCardInformation}>
        <p className={styles.ProductCardInformation_title}>{name}</p>
        <h4 className={styles.ProductCardInformation_seller}>{brand}</h4>
        <div className={styles.Price_Container}>
          <s> {Intl.NumberFormat("es-CO", {
              style: "currency",
              currency: "COP",
              minimumFractionDigits: 0,
            }).format(price)}</s>
          <p> {Intl.NumberFormat("es-CO", {
              style: "currency",
              currency: "COP",
              minimumFractionDigits: 0,
            }).format(price)}</p>
        </div>

        {cart?<button className={styles.ProductCard_btn}>Borrar</button>:<button className={styles.ProductCard_btn}>Agregar al carrito</button>}
        
      </div>
    </Link>
  );
}

export default ProductsCard;
