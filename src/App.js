import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import AllRoutes from "./AllRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  // npx electron-packager . --platform=win32 --arch=x64 --out=dist --overwrite

  return (
    <BrowserRouter>
      <Navbar />
      <AllRoutes />
    </BrowserRouter>
  );
};

export default App;
