import React from 'react'
import sliderStyles from "./iconsSlider.module.css"
import iconCar from "../../assets/icons/carrito-icon.svg"

const icons= []

function IconsSlider() {
  return (
    <div>
      <img src={iconCar} alt="Caricon" />
    </div>
  )
}

export default IconsSlider
