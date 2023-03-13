import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Customers = () => {
  return (
    <div>
      <Navbar />
      {/* <Link to={"/newcustomer"}>Add Customer</Link> */}
      <Link to={"/newcustomer/0"}>PCM TRADERS</Link>
      <div>Customer List</div>
    </div>
  );
};

export default Customers;
