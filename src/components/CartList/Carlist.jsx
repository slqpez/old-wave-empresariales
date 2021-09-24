import React from 'react'
import ProductsCard from '../ProductCard/ProductCard'
import cartListStyle  from "./cartList.module.css"

function Carlist() {
  return (
    <div className={cartListStyle.carlist}>
      <ProductsCard></ProductsCard>
    </div>
  )
}

export default Carlist
