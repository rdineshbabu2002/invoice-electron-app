import React from "react";
import { Route, Routes } from "react-router-dom";
import Addcustomer from "./screens/Addcustomer";
import Addgoods from "./screens/Addgoods";
import BillTemplate from "./screens/BillTemplate";
import Home from "./screens/Home";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bill" element={<BillTemplate />} />
        <Route path="/newconstomer" element={<Addcustomer />} />
        <Route path="/newconstomer/:id" element={<Addcustomer />} />
        <Route path="/newgoods" element={<Addgoods />} />
        <Route path="/newgoods/:id" element={<Addgoods />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
