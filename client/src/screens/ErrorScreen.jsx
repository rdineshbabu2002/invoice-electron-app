import React from "react";

import "../styles/screens/SuccessScreen.css";
const ErrorScreen = () => {
  return (
    <div className="success-container">
      <h2 className="failue-payment">
        Something went wrong with your payment 😥
      </h2>

      <p>Contact the Administator and Try Again !</p>

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

export default ErrorScreen;
