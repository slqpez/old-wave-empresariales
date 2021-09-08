import React from "react";
import searchFormStyles from "./searchForm.module.css";

function SearchForm() {
  return (
    <form action="POST" className={searchFormStyles.form}>
      <div className={searchFormStyles.inputSection}>
        <input type="text" className={searchFormStyles.inputSearch} placeholder="Estoy buscando..." />
        <button type="button" className={searchFormStyles.btnCategories}>
          Todas las categorías
        </button>
      </div>
      <div className={searchFormStyles.btnsSection}>
        <button type="submit" className={`${searchFormStyles.btnSearch} ${searchFormStyles.btns}`}>
          Buscar
        </button>
        <button type="button" className={`${searchFormStyles.btnFilter} ${searchFormStyles.btns}`}>
          Filtros
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
