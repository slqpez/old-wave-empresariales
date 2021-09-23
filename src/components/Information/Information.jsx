import React from "react";
import informationStyles from "./information.module.css";
import Compras from "../../assets/icons/icon-compras-seguras.svg";
import Pagos from "../../assets/icons/icon-multiples-medios-pago.svg";
import Calidad from "../../assets/icons/icon-calidad-garantizada.svg";
import Envios from "../../assets/icons/icon-envios-todo-elpais.svg";

function Information() {
  return (
    <section className={informationStyles.information}>
      <div>
        <img src={Compras} alt="Compras Seguras" />
        <p>Compras <br/> Seguras</p>
      </div>
      <div>
        <img src={Pagos} alt="Multiples Medios de Pago" />
        <p>Multiples medios <br /> de Pago</p>
      </div>
      <div>
        <img src={Calidad} alt="Calidad Garantizada" />
        <p>Calidad <br /> Garantizada</p>
      </div>
      <div>
        <img src={Envios} alt="Envíos todo el pais" />
        <p>Envíos a <br /> todo el pais</p>
      </div>
    </section>
  );
}

export default Information;
