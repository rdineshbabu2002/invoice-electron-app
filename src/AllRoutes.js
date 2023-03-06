import React from "react";
import { Route, Routes } from "react-router-dom";
import Addcustomer from "./screens/Addcustomer";
import Addgoods from "./screens/Addgoods";
import BillTemplate from "./screens/BillTemplate";
import Customers from "./screens/Customers";
import Goods from "./screens/Goods";
import Home from "./screens/Home";
import NewBill from "./screens/NewBill.jsx";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newbill" element={<NewBill />} />
        <Route path="/bill" element={<BillTemplate />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/newconstomer" element={<Addcustomer />} />
        <Route path="/newconstomer/:id" element={<Addcustomer />} />
        <Route path="/goods" element={<Goods />} />
        <Route path="/newgoods" element={<Addgoods />} />
        <Route path="/newgoods/:id" element={<Addgoods />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
