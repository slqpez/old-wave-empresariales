import React from 'react'
import Banner from "../../assets/desktop/banner-blackfriday@2x.png"
import bannerStyles from "./bannerMain.module.css"

function BannerMain() {
  return (
    <div>
      <img className={bannerStyles.banner}  src={Banner} alt="Banner black friday" />
    </div>
  )
}

export default BannerMain
