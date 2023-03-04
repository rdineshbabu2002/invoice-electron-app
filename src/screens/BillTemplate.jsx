import React from "react";
import "../styles/screens/BillTemplate.css";
import muruganImg from "../assets/murugan.png";

const BillTemplate = () => {
  return (
    <div className="bill-template-screen">
      <div className="bill-page">
        <div className="bill-title-container">
          <h1 className="bill-title txt-align-center">
            SAKTHI MURUGAN RICE MILL
          </h1>
        </div>
        <p className="txt-align-center">
          <span className="invoice-title">Invoice No : </span>168
        </p>
        <div className="bill-details-container">
          <div className="bill-logo-container">
            <img
              src={muruganImg}
              alt="murugan img"
              className="bill-company-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillTemplate;
