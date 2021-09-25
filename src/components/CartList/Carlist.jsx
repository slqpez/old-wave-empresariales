import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import cartListStyles  from "./cartList.module.css"

function Carlist({cartProducts,handleDeleteProduct,handleEmptyCart}) {
  return (
    <div className={cartListStyles.carlist}>
       {cartProducts.length > 0?<button  className={cartListStyles.emptyCart} onClick={handleEmptyCart}>Vaciar carrito</button>:null}
       {cartProducts.length > 0 ?cartProducts.map(product=>{
        return(
          <ProductCard key={product.id} name={product.name} price={product.price} image={product.image}  id={product.id} brand={product.brand} cart={true} handleDeleteProduct={handleDeleteProduct}></ProductCard>
        )
      }):<p className={cartListStyles.notProducts}>Aún no tienes productos agregados</p>}

      
    </div>
  )
}

export default Carlist
