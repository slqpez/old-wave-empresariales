import React from "react";
import searchFormStyles from "./searchForm.module.css";

function SearchForm({handleSubmit, handleInput}) {
  return (
    <form onSubmit={handleSubmit} className={searchFormStyles.form}>
      <div className={searchFormStyles.inputSection}>
        <input type="text" className={searchFormStyles.inputSearch} placeholder="Estoy buscando..."  onChange={handleInput}/>
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
