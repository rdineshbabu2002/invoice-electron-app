import React from "react";

import "../styles/screens/SuccessScreen.css";
const SuccessScreen = () => {
  return (
    <div className="success-container">
      <h2 className="success-payment">
        Your Payment is Successfully Completed 🥳
      </h2>

      <p>Thanks for purchasing our Products </p>

      <div className="success-moreorders">
        <p>For more orders</p>
        <div>
          <p>Contact :</p>
          <p>Phone: 9994574429,9443362732</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
