import React, {useState} from "react";
import SearchForm from "../SearchForm/SearchForm";
import logo from "../../assets/logos/logo-oldwave-header.svg";
import loginIcon from "../../assets/icons/login-icon.svg";
import cartIcon from "../../assets/icons/carrito-icon.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import headerStyles from "./header.module.css";
import {useHistory} from "react-router-dom"
import Carlist from "../CartList/Carlist";

const customId = "custom-id-yes";

function Header() {

  const history = useHistory()

  const [inputValue, setInputValue] = useState("")

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

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
      history.push(`/products/${inputValue}-from-0`);
    }
  };
  return (
    <header className={headerStyles.header}>
      <section className={headerStyles.brandSection}>
        <div>
          <img src={logo} alt="Old wave logo" />
        </div>
        <nav className={headerStyles.loginSection}>
          <button className={headerStyles.btn}>
            Regístrate o inicia sesión
          </button>
          <div className={headerStyles.icons}>
            <img src={loginIcon} alt="Avatar Login" />
            <img
              src={cartIcon}
              className={headerStyles.icon}
              alt="Shopping cart"
            />
            <Carlist></Carlist>
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
