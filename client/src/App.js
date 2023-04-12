import React from "react";
import { HashRouter } from "react-router-dom";

import "./App.css";
import AllRoutes from "./AllRoutes";

const App = () => {
  return (
    <>
      <HashRouter>
        <AllRoutes />
      </HashRouter>
    </>
  );
};

export default App;
