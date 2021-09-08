import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import logo from "../../assets/logos/logo-oldwave-header.svg";
import loginIcon from "../../assets/icons/login-icon.svg";
import cartIcon from "../../assets/icons/carrito-icon.svg";
import headerStyles from "./header.module.css";

function Header() {
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
          </div>
        </nav>
      </section>
      <section className={headerStyles.searchSection}>
        <SearchForm></SearchForm>
      </section>
    </header>
  );
}

export default Header;
