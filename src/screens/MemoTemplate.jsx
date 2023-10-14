import React, { useRef } from "react";
import "../styles/screens/MemoBillTemplate.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const MemoTemplate = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const componentRef = useRef();
  const { headerValues, tableValues, total } = state;

  const downloadPdf = useReactToPrint({
    content: () => componentRef.current,
  });

  const goToHome = () => {
    navigate("/");
  };
  return (
    <>
      <button onClick={downloadPdf} className="bill-button">
        Print
      </button>
      <button onClick={goToHome} className="bill-button">
        Go to Home
      </button>
      <div className="memo-template-container" ref={componentRef}>
        <div className="memo-bill">
          <div className="memo-header">
            <p>உ</p>
            <p className="memo-memo-title">MEMO</p>
            <h1>SAKTHI MURUGAN RICE MILL</h1>
          </div>
          <div className="memo-name-date-container">
            <div className="memo-name-container">
              <p className="memo-name">
                Name:{" "}
                <span className="memo-name-value">{headerValues.name}</span>
              </p>
            </div>
            <div className="memo-date-container">
              <p className="memo-date">
                Date:
                <span className="memo-date-value">{headerValues.date}</span>
              </p>
            </div>
          </div>
          <div className="memo-table-container">
            <table className="memo-table">
              <tbody className="memo-table-body">
                <tr>
                  <th className="memo-th memo-sno">S.No</th>
                  <th className="memo-th memo-pro-des">Rate</th>
                  <th className="memo-th memo-amount">Amount</th>
                </tr>
                {tableValues.map((singleValue, index) => {
                  return (
                    <tr className="memo-tr" key={index}>
                      <td className="memo-td">{index + 1}</td>
                      <td className="memo-td">
                        {singleValue[`rate${index}`]} X{" "}
                        {singleValue[`amount${index}`]}
                      </td>
                      <td className="memo-td">
                        {singleValue[`total${index}`]}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot className="memo-table-footer">
                <tr>
                  <td></td>
                  <td className="memo-total">Total</td>
                  <td className="memo-total-value">{total}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="memo-footer">
            <p>For Sakthi Murugan Rice Mill</p>
            <p className="memo-auth-sign">Authorised Signatory</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemoTemplate;
