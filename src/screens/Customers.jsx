import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Customers = () => {
  return (
    <div>
      <Navbar />
      <Link className="" to={window.location.href + "/addcustomer"}>
        Add Customer
      </Link>
      Customers
    </div>
  );
};

export default Customers;
