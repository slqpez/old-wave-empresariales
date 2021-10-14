import React, { useEffect, useState, useContext } from "react";
import productDetailStyle from "./productDetail.module.css";
import {ProductsContext} from "../../context/productsContext"
import { Link, useParams } from "react-router-dom";
import {
  getProductByIDFlask,
  getProductByIDFast,
} from "../../services/products";

function ProductDetail() {
  const { search, product, id, seller } = useParams();
  const [dataProduct, setDataProduct] = useState({});
  const [{ cartProducts }, dispatch] = useContext(ProductsContext);

  useEffect(() => {
   
    getProductByIDFast(id).then((data) => setDataProduct(data));
  }, []);



 
  const handleAddToCart = async (e) => {
    e.preventDefault()

    const image = dataProduct.pictures[0]
    console.log(image)
    const {name, price , id, brand} = dataProduct
    const product = { name, image, price, id, brand };
    console.log(product)
    if (cartProducts.length === 0) {
      dispatch({ type: "ADD_PRODUCT_TO_CART", payload: product });
      window.localStorage.setItem(
        "cart-products",
        JSON.stringify([...cartProducts, product])
      );
    } else {
      const newCart = cartProducts.filter((p) => p.id !== id);
      const exists = cartProducts.find((p) => p.id === id);

      if (exists) {
       /*  setQuantity((q) => q + 1); */
      } else {
        const product = { name, image, price, id, brand };
        dispatch({ type: "ADD_PRODUCT_TO_CART", payload: product });
        window.localStorage.setItem(
          "cart-products",
          JSON.stringify([...cartProducts, product])
        );
      }
    }
  }; 


  if(Object.keys(dataProduct).length === 0) return <p>Cargando...</p>

  return (
    <div className={productDetailStyle.detailContent}>
      <div>
        <Link to="/">Home</Link>
        <span> &gt;</span>
        <Link to={"/products/" + search}>{search}</Link>
        <span> &gt;</span>
        <Link to={"/products/" + search + "/" + product + "/" + id}>
          {product}
        </Link>

        

       <div>
          <div className={productDetailStyle.imagesContainer}>
            {dataProduct?.pictures.map((picture, i) => {
              return (
                <div key={i} className={productDetailStyle.imageContainer}>
                  <img src={picture} alt="Product image" />
                </div>
              );
            })}
            <div className={productDetailStyle.mainImage}>
              <img src={dataProduct?.pictures[0]} alt="Product image" />
            </div>
          </div>

          <div className={productDetailStyle.infoProductContainer}>
            <h3>{dataProduct?.name}</h3>

            <p>{dataProduct?.brand}</p>
            <p>{dataProduct?.city?.name}</p>
            <p>
              {" "}
              {Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP",
                minimumFractionDigits: 0,
              }).format(dataProduct?.price)}
            </p>

            <div>
              <h4>Vendedor</h4>
              <p>{dataProduct?.seller.name}</p>
            </div>
            <button className={productDetailStyle.Detail_btn} onClick={handleAddToCart}>
              Agregar al carrito
            </button>
          </div>
          <hr className={productDetailStyle.DetailHr} />
          <div className={productDetailStyle.descriptionContainer}>
            <h3>Descripción del producto</h3>
            <p>Tipo de producto: {dataProduct?.description}</p>
            <p>Valoración: {dataProduct?.rating}</p>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default ProductDetail;
