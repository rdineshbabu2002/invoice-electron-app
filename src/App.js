import React from "react";
import { HashRouter } from "react-router-dom";

import "./App.css";
import AllRoutes from "./AllRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <AllRoutes />
    </HashRouter>
  );
};

export default App;
