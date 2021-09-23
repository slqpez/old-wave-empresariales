import React from "react";
import offerCatalogStyles from "./offerCatalog.module.css";
import Offer1 from "../../assets/desktop/banner-auxilar-ordenadores@2x.png";
import Offer2 from "../../assets/desktop/producto1@2x.png";
import Offer3 from "../../assets/desktop/producto2@2x.png";
import Offer4 from "../../assets/desktop/producto3@2x.png";
import Offer5 from "../../assets/desktop/producto4@2x.png";
import Offer6 from "../../assets/desktop/banner-auxiliar-bicicletas@2x.png";

function OfferCatalog() {
  return (
    <div className={offerCatalogStyles.Offers_container}>
      <div className={offerCatalogStyles.Offers_banner}>
        <img src={Offer1} alt="Offer: Ordenadores" />
      </div>
      <div className={offerCatalogStyles.Offers_product_container}>
        <div className={offerCatalogStyles.Offers_product}>
          <img
            className={offerCatalogStyles.Offers_product_img_left}
            src={Offer2}
            alt="Offer: Celular"
          />
        </div>
        <div className={offerCatalogStyles.Offers_product}>
          <img src={Offer3} alt="Offer: Camara" />
        </div>
      </div>
      <div className={offerCatalogStyles.Offers_product_container}>
        <div className={offerCatalogStyles.Offers_product}>
          <img src={Offer4} alt="offer: Portátil" />
        </div>
        <div className={offerCatalogStyles.Offers_product}>
          <img
            className={offerCatalogStyles.Offers_product_img_left}
            src={Offer5}
            alt="Offer: Tablet"
          />
        </div>
      </div>
      <div className={offerCatalogStyles.Offers_banner}>
        <img src={Offer6} alt="Offer: Bicicletas" />
      </div>
    </div>
  );
}

export default OfferCatalog;
