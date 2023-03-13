import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/screens/Customers.css";
import cust from "../customers.json";
const Customers = () => {
  return (
    <div>
      <Navbar />
      {/* <Link to={"/newcustomer"}>Add Customer</Link> */}
      <Link to={"/newcustomer/0"}>PCM TRADERS</Link>
      <div className="Head">Customer List</div>
      <div className="Goods-cards">
        {cust.map((val) => {
          return (
            <div className="Indv-cards">
              <div className="Labels">
                <div className="Label-name">
                  <p className="Attribute">NAME:</p>
                  <p className="Attribute-value">{val.name}</p>
                </div>
                <div className="Label-addr">
                  <p className="Attribute">ADDRESS:</p>
                  <p className="Attribute-value">{val.address}</p>
                </div>
                <div className="Label-gst">
                  <p className="Attribute">GST-IN:</p>
                  <p className="Attribute-value">{val.gstin}</p>
                </div>
              </div>
              <div className="buttons">
                <div className="Delete">
                  <button className="delete-btn">DELETE</button>
                </div>
                <div className="Edit">
                  <button className="edit-btn">EDIT</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Customers;
