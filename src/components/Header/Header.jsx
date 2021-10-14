import React, {useState, useContext} from "react";
import SearchForm from "../SearchForm/SearchForm";
import logo from "../../assets/logos/logo-oldwave-header.svg";
import loginIcon from "../../assets/icons/login-icon.svg";
import cartIcon from "../../assets/icons/carrito-icon.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductsContext } from "../../context/productsContext";
import headerStyles from "./header.module.css";
import {useHistory} from "react-router-dom"
import Carlist from "../CartList/Carlist";
import BurguerMenu from "../BurguerMenu/BurguerMenu"
import useCartProducts from "../../hooks/useCartProducts"

const customId = "custom-id-yes";

function Header() {

  const history = useHistory()

  const [inputValue, setInputValue] = useState("")
  const [showCart, setShowCart] = useState(false)
  const [showMenu, setShowMenu] = useState(false)


  const [state, dispatch] = useContext(ProductsContext);
  const [cartDeleted, setCartDeleted] = useState(false)

  const { cartProducts } = useCartProducts(cartDeleted);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleShowMenu=()=>{
    setShowMenu(!showMenu)
  }

  const handleShowCart=()=>{
    setShowCart(!showCart);
  }


  const handleDeleteProduct=(e)=>{
     e.preventDefault()
    const id  = Number(e.target.getAttribute("data-id"))
    console.log(id)
    dispatch({ type: "DELETE_PRODUCT_FROM_CART", payload: id });
    const products = JSON.parse(window.localStorage.getItem("cart-products"))
    const newProducts = products.filter(product => product.id !== id)
   window.localStorage.setItem("cart-products", JSON.stringify(newProducts))
    setCartDeleted(!cartDeleted) 
   
  }


  const handleEmptyCart=()=>{
    dispatch({type:"DELETE_ALL_PRODUCTS_FROM_CART"})
    window.localStorage.clear()
    setCartDeleted(!cartDeleted)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      toast.info("No ingresaste valor de búsqueda.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: customId,
      });
    } else {
      history.push(`/products/${inputValue}`);
    }
  };

  console.log(cartProducts)
  return (
    <header className={headerStyles.header}>
     {showMenu?
     <nav className={headerStyles.nav}>
     <ul>
       <li>Iniciar sesión</li>
       <li>Acerca de nostros</li>
       <li>Contáctanos</li>
       <button onClick={handleShowMenu}>X</button>
     </ul>
   </nav>:null} 
   <BurguerMenu handleShowMenu={handleShowMenu}/>
      <section className={headerStyles.brandSection}>
      
        <div>  
          <img src={logo} alt="Old wave logo" />
        </div>
        <nav className={headerStyles.loginSection}>
          <button className={headerStyles.btn} data-cy="btn-login">
            Regístrate o inicia sesión
          </button>
          <div className={headerStyles.icons}>
            <img src={loginIcon} alt="Avatar Login" />
            <img
              src={cartIcon}
              className={headerStyles.icon}
              alt="Shopping cart"
              onClick={handleShowCart}
            />
            {showCart?<Carlist cartProducts={cartProducts} handleEmptyCart={handleEmptyCart} handleDeleteProduct={handleDeleteProduct}></Carlist>:null}
          </div>
        </nav>
      </section>
      <section className={headerStyles.searchSection}>
        <SearchForm handleSubmit={handleSubmit} handleInput={handleInput}></SearchForm>
      </section>
      <ToastContainer />
    </header>
  );
}

export default Header;
