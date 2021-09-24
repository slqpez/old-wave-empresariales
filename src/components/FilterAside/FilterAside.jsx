import React from "react";
import filterAsideStyles from "./filterAside.module.css";

function FilterAside() {
  return (
    <aside className={filterAsideStyles.filterContainer}>
      <h4>Filtros</h4>
      <section>
        <h5>Tipo de producto</h5>
        <ul className={filterAsideStyles.listFilter}>
          <div>
            <input type="checkbox" id="type1" />
            <label htmlFor="type1">Iphone 11</label>
          </div>
          <div>
            <input type="checkbox" id="type2" />
            <label htmlFor="type2">Iphone 11 Pro</label>
          </div>

          <div>
            <input type="checkbox" id="type3" />
            <label htmlFor="type3">Iphone 8 Plus</label>
          </div>

          <div>
            <input type="checkbox" id="type4" />
            <label htmlFor="type4">Iphone SE</label>
          </div>
        </ul>
      </section>

      <section>
        <h5>Marca</h5>
        <ul className={filterAsideStyles.listFilter}>
          <div>
            <input type="checkbox" id="type1" />
            <label htmlFor="type1">Iphone</label>
          </div>
          <div>
            <input type="checkbox" id="type2" />
            <label htmlFor="type2">Apple</label>
          </div>
        </ul>
      </section>

      <section>
        <h5>Estado</h5>
        <ul className={filterAsideStyles.listFilter}>
          <div>
            <input type="checkbox" id="type1" />
            <label htmlFor="type1">Perfecto estado</label>
          </div>
          <div>
            <input type="checkbox" id="type2" />
            <label htmlFor="type2">Buen estado</label>
          </div>
          <div>
            <input type="checkbox" id="type2" />
            <label htmlFor="type2">Usado</label>
          </div>
        </ul>
      </section>
    </aside>
  );
}

export default FilterAside;
