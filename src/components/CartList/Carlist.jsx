import React, {useState} from "react";
import ProductCard from "../ProductCard/ProductCard";
import cartListStyles from "./cartList.module.css";

function Carlist({ cartProducts, handleDeleteProduct, handleEmptyCart }) {
  let totalPrice = 0;
  return (
    <div className={cartListStyles.carlist}>
      {cartProducts.length > 0 ? (
        <button className={cartListStyles.emptyCart} onClick={handleEmptyCart}>
          Vaciar carrito
        </button>
      ) : null}
      {cartProducts.length > 0 ? (
        cartProducts.map((product) => {
          totalPrice = totalPrice + product.price;
          return (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              id={product.id}
              brand={product.brand}
              cart={true}
              handleDeleteProduct={handleDeleteProduct}
            ></ProductCard>
          );
        })
      ) : (
        <p className={cartListStyles.notProducts}>
          Aún no tienes productos agregados... 😓
        </p>
      )}

      {cartProducts.length > 0 ? (
        <div className={cartListStyles.PayContainer}>
          <div className={cartListStyles.PriceContainer}>
            <p>Total: </p>
            <p>
              {" "}
              {Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP",
                minimumFractionDigits: 0,
              }).format(totalPrice)}
            </p>
          </div>
          <div className={cartListStyles.PayContainer_Btn}>
            <button>Ir a pagar</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Carlist;