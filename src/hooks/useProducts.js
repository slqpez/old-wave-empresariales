import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../context/productsContext";
import {getProductsByName} from "../services/products";

function useProducts(productName) {

  const [{ products }, dispatch] = useContext(ProductsContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const[seller,setSeller] = useState("")

  useEffect(() => {
    setLoading(true);
    setError(null);
    getProductsByName(productName)
    .then((data) =>{
      dispatch({
        type: "FETCH_PRODUCTS",
        payload: data.items,
      });
      setLoading(false);
      setSeller(data.seller.id)
    })
    .catch((error) =>{
      console.log(error);
      setError("No se pudo hacer la petición.")
    })
     
    
  }, [productName]);

  return { products, loading, error,seller };
}

export default useProducts;
