import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import image from "../../assets/desktop/producto1@2x.png";
import productDetailStyle from "./productDetail.module.css";
import { Link, useParams } from "react-router-dom";
import { getProductByID } from "../../services/products";

function ProductDetail() {
  const { search, product, id } = useParams();
  const [dataProduct, setDataProduct] = useState({});

  useEffect(() => {
    if (id) {
      getProductByID(id).then((data) => setDataProduct(data));
    }
  }, []);

  console.log(dataProduct);
  return (
    <div>
      <Link to="/">Home</Link>
      <span> &gt;</span>
      <Link to={"/products/" + search}>{search}</Link>
      <span> &gt;</span>
      <Link to={"/products/" + search + "/" + product + "/" + id}>
        {product}
      </Link>

      {Object.keys(dataProduct).length !== 0 ? (
        <div>
          <div className={productDetailStyle.imagesContainer}>
            {dataProduct.pictures.map((picture, i) => {
              return (
                <div key={i} className={productDetailStyle.imageContainer}>
                  <img src={picture} alt="Product image" />
                </div>
              );
            })}
            <div className={productDetailStyle.mainImage}>
              <img src={dataProduct.pictures[0]} alt="Product image" />
            </div>
          </div>

          <div className={productDetailStyle.infoProductContainer}>
          <h3>{dataProduct.name}</h3>

          <p>{dataProduct.brand}</p>
          <p>{dataProduct.city.name}</p>
          <p>
            {" "}
            {Intl.NumberFormat("es-CO", {
              style: "currency",
              currency: "COP",
              minimumFractionDigits: 0,
            }).format(dataProduct.price)}
          </p>

          <div>
            <h4>Vendedor</h4>
            <p>Logo del vendedor</p>
          </div>
          <button className={productDetailStyle.Detail_btn}>
            Agregar al carrito
          </button>
        </div>
        <hr className={productDetailStyle.DetailHr} />
      <div className={productDetailStyle.descriptionContainer}>
        <h3>Descripción del producto</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate in
          quia ipsum labore. Ad magni obcaecati delectus illo repudiandae,
        </p>
      </div>
        </div>
      ) : null}

     
    </div>
  );
}

export default ProductDetail;
