import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../context/productsContext";
import { getProductsByName, getProductsFlask } from "../services/products";

function useProducts(productName) {
  const [{ products }, dispatch] = useContext(ProductsContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [seller, setSeller] = useState("");

  const fetchProducts = async (productName) => {
    setLoading(true);
    setError(null);
    const [fastRes/* , flaskRes */] = await Promise.all([
      getProductsByName(productName),
      /* getProductsFlask(productName), */
    ]);

    setLoading(false);
    setSeller(fastRes.seller.id);

    /* let joinRes = [...fastRes.items, ...flaskRes.items]; */

    dispatch({ type:"FETCH_PRODUCTS", payload:fastRes.items})
  };

  useEffect(() => {
    fetchProducts(productName);
  }, [productName]);

  return { products, loading, error, seller };
}

export default useProducts;
