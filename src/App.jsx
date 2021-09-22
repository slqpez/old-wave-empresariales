import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./components/Body";
import AppStyles from "./App.module.css";

function App() {
  return (
    <div className={AppStyles.container}>
      <Router>
        <Body />
      </Router>
    </div>
  );
}
export default App;
