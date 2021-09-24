import React from "react";
import footerStyles from "./footer.module.css";
import logoFooter from "../../assets/logos/logo-oldwave-footer.svg";
import instagram from "../../assets/icons/icon-instagram.svg";
import facebook from "../../assets/icons/icon-facebook.svg";
import powered from "../../assets/logos/experimentality-vtex.svg";
import ArrowUp from "../../assets/icons/Icon-arrow-up.svg";

function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <section className={footerStyles.responsive_brandSection}>
          <details className={footerStyles.responsive__footer_details}>
            <summary className={footerStyles.responsie__footer_summary}>
              <h2>
                <span>Old</span>Wave
              </h2>
              <img src={ArrowUp} alt="ArrowUp" />
            </summary>
            <ul>
              <li>
                <a href="#">¿Quienes sómos?</a>
              </li>
              <li>
                <a href="#">Nuestras tiendas</a>
              </li>
            </ul>
          </details>
          <hr />
          <details className={footerStyles.responsive__footer_details}>
            <summary className={footerStyles.responsie__footer_summary}>
              <h2>Link de interés</h2>
              <img src={ArrowUp} alt="ArrowUp" />
            </summary>
            <ul>
              <li>
                <a href="#">Preguntas frecuentes</a>
              </li>
              <li>
                <a href="#">Terminos y condiciones</a>
              </li>
              <li>
                <a href="#">Politicas de devoluciones</a>
              </li>
            </ul>
          </details>
          <hr />
          <details className={footerStyles.responsive__footer_details}>
            <summary className={footerStyles.responsie__footer_summary}>
              <h2>Contácto</h2>
              <img src={ArrowUp} alt="ArrowUp" />
            </summary>
            <ul>
              <li>servicioalcliente@oldwave.com</li>
              <li>Telefono: 316 1924</li>
            </ul>
          </details>
      </section>
      <section className={footerStyles.brandSection}>
        <div className={footerStyles.footer__flex_item}>
          <img src={logoFooter} alt="" />
        </div>
        <div className={footerStyles.footer__flex_item}>
          <h2>
            <span>old</span>wave
          </h2>
          <ul>
            <li>
              <a href="#">¿Quienes sómos?</a>
            </li>
            <li>
              <a href="#">Nuestras tiendas</a>
            </li>
          </ul>
        </div>
        <div className={footerStyles.footer__flex_item}>
          <h2>Link de interés</h2>
          <ul>
            <li>
              <a href="#">Preguntas frecuentes</a>
            </li>
            <li>
              <a href="#">Terminos y condiciones</a>
            </li>
            <li>
              <a href="#">Politicas de devoluciones</a>
            </li>
          </ul>
        </div>
        <div className={footerStyles.footer__flex_item}>
          <h2>Contácto</h2>
          <ul>
            <li>servicioalcliente@oldwave.com</li>
            <li>Telefono: 316 1924</li>
          </ul>
          <h2 className={footerStyles.social_network}>Redes sociales</h2>
          <a href="https://www.facebook.com">
            <img src={facebook} alt="Facebook logo" />
          </a>
          <a href="https://www.instagram.com">
            <img src={instagram} alt="Instagram logo" />
          </a>
        </div>
      </section>
      <section className={footerStyles.footerSection}>
        <h3>oldwave© 2020 | Powered by:</h3>
        <img src={powered} alt="" />
      </section>
    </footer>
  );
}

export default Footer;
