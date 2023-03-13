import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/screens/Customers.css";
import updateLocalStorage from "../utils/updateLocalStorage";
const Customers = () => {
  updateLocalStorage();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("customers");
    if (data) {
      setCustomers(JSON.parse(data));
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="customer-header">
        <p>Customers List</p>
        <Link className="add-customer" to={"/newcustomer"}>
          Add Customer
        </Link>
      </div>
      <div className="cusotmer-cards customer-card-container">
        {customers.map((val, i) => {
          return (
            <div className="customer-Indv-cards" key={i}>
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
                  <Link to={"/newcustomer/" + i} className="link">
                    <button className="edit-btn">EDIT</button>
                  </Link>
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
