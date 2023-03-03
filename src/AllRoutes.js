import React from "react";
import { Route, Routes } from "react-router-dom";
import BillTemplate from "./screens/BillTemplate";
import Home from "./screens/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bill" element={<BillTemplate />} />
    </Routes>
  );
};

export default AllRoutes;
