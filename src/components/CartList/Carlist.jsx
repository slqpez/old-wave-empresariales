import React from 'react'
import ProductsCard from '../ProductCard/ProductCard'
import cartListStyle  from "./cartList.module.css"

function Carlist() {
  return (
    <div className={cartListStyle.carlist}>
      <button className={cartListStyle.emptyCartBtn}>Vaciar carrito</button>
      <ProductsCard cart={true}></ProductsCard>
      <ProductsCard cart={true}></ProductsCard>
    </div>
  )
}

export default Carlist
