import React from "react";
import newsletterStyles from "./newsletter.module.css";

function Newsletter() {
  return (
    <section className={newsletterStyles.section}>
      <div className={newsletterStyles.section_left}>
        <h2>Suscríbete a nuestro boletín</h2>
        <p>Recibe información de nuestras ofertas</p>
      </div>
      <div className={newsletterStyles.section_right}>
        <input type="text" placeholder="Ingresa tu correo electrónico"/>
        <button>Suscribirme</button>
        <p>
          *Al suscribirme acepto recibir emails e información de oldwaves, bajo
          sus Políticas de datos personales
        </p>
      </div>
    </section>
  );
}

export default Newsletter;
