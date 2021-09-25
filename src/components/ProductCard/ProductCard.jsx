import React,{useContext,useState} from "react";
import productsCardStyles from "./productCard.module.css";
import cartProductStyles from "./cartProduct.module.css";
import { ProductsContext } from "../../context/productsContext";
import {Link} from "react-router-dom"

function ProductsCard({cart, price, name, id, image, brand, search,handleDeleteProduct,seller}) {


  const [{ cartProducts }, dispatch] = useContext(ProductsContext);

  const [quantity, setQuantity] = useState(1);


  const handleAddToCart = async () => {
    const product = { name, image, price, id,brand};
    if (cartProducts.length === 0) {
      dispatch({ type: "ADD_PRODUCT_TO_CART", payload: product });
      window.localStorage.setItem(
        "cart-products",
        JSON.stringify([...cartProducts,product])
      );
    } else {
      const newCart = cartProducts.filter((p) => p.id !== id);
      const exists = cartProducts.find((p) => p.id === id);

      if (exists) {
        setQuantity((q) => q + 1);
      } else {
        const product = { title, image, price, id,brand };
        dispatch({ type: "ADD_PRODUCT_TO_CART", payload:product });
        window.localStorage.setItem(
          "cart-products",
          JSON.stringify([...cartProducts, product])
        );
      }
    }
  };



  const styles = cart? cartProductStyles: productsCardStyles;
  
  return (
    <Link to={"/products/" +search + "/" + name +  "/" +seller +"/" +id} className={styles.ProductCard}>
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

        {cart?<button className={styles.ProductCard_btn}  onClick={handleDeleteProduct} data-id={id}>Borrar</button>:<button className={styles.ProductCard_btn} onClick={handleAddToCart}>Agregar al carrito</button>}
        
      </div>
    </Link>
  );
}

export default ProductsCard;
