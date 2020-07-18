import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MenuAppBar from "./components/MenuAppBar/MenuAppBar.component";
import Footer from "./components/Footer/Footer.component";

function App() {
  return (
    <Router>
      <MenuAppBar />
    </Router>
  );
}

export default App;
