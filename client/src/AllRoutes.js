import React from "react";
import { Route, Routes } from "react-router-dom";
import Addcustomer from "./screens/Addcustomer";
import Addgoods from "./screens/Addgoods";
import BillTemplate from "./screens/BillTemplate";
import Customers from "./screens/Customers";
import Goods from "./screens/Goods";
import Home from "./screens/Home";
import NewBill from "./screens/NewBill.jsx";
import MemoTemplate from "./screens/MemoTemplate";
import NewMemo from "./screens/NewMemo";
import AllBills from "./screens/AllBills";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newbill" element={<NewBill />} />
        <Route path="/bill" element={<BillTemplate />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/newcustomer" element={<Addcustomer />} />
        <Route path="/newcustomer/:id" element={<Addcustomer />} />
        <Route path="/goods" element={<Goods />} />
        <Route path="/newgoods" element={<Addgoods />} />
        <Route path="/newgoods/:id" element={<Addgoods />} />
        <Route path="/newMemo" element={<NewMemo />} />
        <Route path="/memo" element={<MemoTemplate />} />
        <Route path="/allBills" element={<AllBills />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
