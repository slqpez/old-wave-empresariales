import React from 'react'
import {Route, Switch} from "react-router-dom"
import Home from "../pages/Home/Home"
import Products from "../pages/Products/Products"

function Body() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route  exact path="/products/:product" component={Products}></Route>
      </Switch>
    </div>
  )
}

export default Body
