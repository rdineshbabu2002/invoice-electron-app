import React from "react";
import Navbar from "../components/Navbar";
import goods from "../goods.json";
import "../styles/screens/Goods.css";
const Goods = () => {
  return (
    <div>
      <Navbar />
      <div className="Goods-cards good-card-container">
        {goods.map((val) => {
          return (
            <div className="Indv-cards">
              <div className="Labels">
                <div className="Label-name">
                  <p className="Attribute">NAME:</p>
                  <p className="Attribute-value">{val.name}</p>
                </div>
                <div className="Label-type">
                  <p className="Attribute">HSN-ACS:</p>
                  <p className="Attribute-value">{val.hsn_acs}</p>
                </div>
                <div className="Label-qty">
                  <p className="Attribute">QUANTITY:</p>
                  <p className="Attribute-value">{val.qty}</p>
                </div>
                <div className="Label-price">
                  <p className="Attribute">PRICE:</p>
                  <p className="Attribute-value">{val.rate}</p>
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

export default Goods;
