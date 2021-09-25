import React from 'react'
import {Route, Switch} from "react-router-dom"
import Home from "../pages/Home/Home"
import Products from "../pages/Products/Products"
import ProductDetail from "../pages/ProductDetail/ProductDetail"

function Body() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route  exact path="/products/:search/" component={Products}></Route>
        <Route  exact path="/products/:search/:product" component={ProductDetail}></Route>
      </Switch>
    </div>
  )
}

export default Body
