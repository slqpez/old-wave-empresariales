import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./components/Body";
import AppStyles from "./App.module.css";
import Header from "./components/Header/Header";
import Information from "./components/Information/Information";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={AppStyles.container}>
      <Router>
        <Header />
        <Body />
        <Information />
        <Newsletter />
        <Footer />
      </Router>
    </div>
  );
}
export default App;
