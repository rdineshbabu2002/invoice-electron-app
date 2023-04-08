import React from "react";
import Navbar from "../components/Navbar";
import "../styles/screens/MemoBillTemplate.css";
const MemoTemplate = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="memo-template-container">
        <div className="memo-bill">
          <div className="memo-header">
            <p>உ</p>
            <p className="memo-memo-title">MEMO</p>
            <h1>SAKTHI MURUGAN RICE MILL</h1>
          </div>
          <div className="memo-name-date-container">
            <div className="memo-name-container">
              <p className="memo-name">
                Name: <span className="memo-name-value">PCM TRADERS</span>
              </p>
            </div>
            <div className="memo-date-container">
              <p className="memo-date">
                Date:<span className="memo-date-value"> 14.02.2004</span>
              </p>
            </div>
          </div>
          <div className="memo-table-container">
            <table className="memo-table">
              <tbody className="memo-table-body">
                <tr>
                  <th className="memo-th memo-sno">S.No</th>
                  <th className="memo-th memo-pro-des">Product Description</th>
                  <th className="memo-th memo-amount">Amount</th>
                </tr>
                <tr className="memo-tr">
                  <td className="memo-td">1</td>
                  <td className="memo-td">1300 X 7</td>
                  <td className="memo-td">10000</td>
                </tr>
              </tbody>
              <tfoot className="memo-table-footer">
                <tr>
                  <td></td>
                  <td className="memo-total">Total</td>
                  <td className="memo-total-value">14000</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="memo-footer">
            <p>For Sakthi Murugan Rice Mill</p>
            <p className="memo-auth-sign">Authorised Signatory</p>
          </div>
        </div>
        <div className="memo-bill">
          <div className="memo-header">
            <p>உ</p>
            <p className="memo-memo-title">MEMO</p>
            <h1>SAKTHI MURUGAN RICE MILL</h1>
          </div>
          <div className="memo-name-date-container">
            <div className="memo-name-container">
              <p className="memo-name">
                Name: <span className="memo-name-value">PCM TRADERS</span>
              </p>
            </div>
            <div className="memo-date-container">
              <p className="memo-date">
                Date:<span className="memo-date-value"> 14.02.2004</span>
              </p>
            </div>
          </div>
          <div className="memo-table-container">
            <table className="memo-table">
              <tbody className="memo-table-body">
                <tr>
                  <th className="memo-th memo-sno">S.No</th>
                  <th className="memo-th memo-pro-des">Product Description</th>
                  <th className="memo-th memo-amount">Amount</th>
                </tr>
                <tr className="memo-tr">
                  <td className="memo-td">1</td>
                  <td className="memo-td">1300 X 7</td>
                  <td className="memo-td">10000</td>
                </tr>
              </tbody>
              <tfoot className="memo-table-footer">
                <tr>
                  <td></td>
                  <td className="memo-total">Total</td>
                  <td className="memo-total-value">14000</td>
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
