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
import GstBillTemplate from "./screens/GetBillTemplate";
import UploadJson from "./screens/UploadJson";
import AllBills from "./screens/AllBills";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Bill entry screen */}
        <Route path="/newbill" element={<NewBill />} />
        <Route path="/newMemo" element={<NewMemo />} />

        {/* Bill template */}
        <Route path="/bill" element={<BillTemplate />} />
        <Route path="/gstbill" element={<GstBillTemplate />} />
        <Route path="/memo" element={<MemoTemplate />} />

        {/* Customer */}
        <Route path="/customers" element={<Customers />} />
        {/* View all Customer  */}
        <Route path="/newcustomer" element={<Addcustomer />} />
        {/* Add new Customer  */}
        <Route path="/newcustomer/:id" element={<Addcustomer />} />
        {/* Edit Customer  */}

        {/* Goods */}
        <Route path="/goods" element={<Goods />} />
        {/* View all Goods  */}
        <Route path="/newgoods" element={<Addgoods />} />
        {/* Add new Goods  */}
        <Route path="/newgoods/:id" element={<Addgoods />} />
        {/* Edit Goods  */}

        <Route path="/uploadjson" element={<UploadJson />} />
        <Route path="/allbills" element={<AllBills />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
