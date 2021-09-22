import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./components/Body";
import AppStyles from "./App.module.css";
import ProductsCard from "./components/ProductsCard/ProductsCard";

function App() {
  return (
    <div className={AppStyles.container}>
      <Router>
        <Body />
        <ProductsCard/>
      </Router>
    </div>
  );
}

export default App;
