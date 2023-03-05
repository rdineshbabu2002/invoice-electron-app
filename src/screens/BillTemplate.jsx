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
          <span className="invoice-title font-family-light">Invoice No : </span>
          168
        </p>
        <p className="bill-date">
          <span className="bill-date-name">Date :</span> 05-03-2023
        </p>
        <div className="bill-details-container">
          <div className="bill-logo-container">
            <img
              src={muruganImg}
              alt="murugan img"
              className="bill-company-logo"
            />
          </div>
          <div className="bill-bill-address-container">
            <p className="bill-bill-from-title font-family-light">Bill from</p>
            <p className="bill-from-name ">Sakthi Murugan Rice Mill</p>
            <p className="bill-from-address font-family-light">
              280,Pasur Road, Sellathapalayam, Elumathur, Erode - 638104.
            </p>
            <p className="bill-form-gstno font-family-light">
              GSTIN : 33ABMFS6116L1ZV
            </p>
          </div>
          <div className="bill-bill-address-container ">
            <p className="bill-bill-from-title font-family-light">Bill to</p>
            <p className="bill-from-name ">PCM TRADERS</p>
            <p className="bill-from-address font-family-light">
              517/6, Petthampalayam Road, Perundurai.
            </p>
            <p className="bill-form-gstno font-family-light">
              GSTIN : 33ABMFS6116L1ZV
            </p>
            <p className="bill-form-gstno font-family-light">
              Vehicle No : TN33BV2398
            </p>
          </div>
        </div>
        <p className="txt-align-center bos-title">BILL OF SUPPLY</p>
        <div className="bill-table-container">
          <table>
            <thead className="bill-table-header">
              <tr>
                <th className="bill-table-header-title prod-des">
                  Product Description
                </th>
                <th className="bill-table-header-title hsn-acs">HSN ACS</th>
                <th className="bill-table-header-title bags">Bags</th>
                <th className="bill-table-header-title qty">Qty</th>
                <th className="bill-table-header-title rate">Rate</th>
                <th className="bill-table-header-title amount">Amount</th>
              </tr>
            </thead>
            <tbody className="table-body-bill">
              <tr className="bill-table-row">
                <td className="bill-table-body font-family-light">
                  BPT 26 KG BOILED RICE
                </td>
                <td className="bill-table-body font-family-light">10063010</td>
                <td className="bill-table-body font-family-light">200</td>
                <td className="bill-table-body font-family-light">5200</td>
                <td className="bill-table-body font-family-light">1206.00</td>
                <td className="bill-table-body font-family-light ">
                  241200.00
                </td>
              </tr>

              <tr className="bill-table-final-row">
                <td className="bill-table-total prod-des">Exempted Goods</td>
                <td className="bill-table-total bill-table-header-title hsn-acs">
                  TOTAL
                </td>
                <td className="bill-table-total bill-table-header-title bags">
                  200
                </td>
                <td className="bill-table-total bill-table-header-title qty">
                  5200
                </td>
                <td className="bill-table-total bill-table-header-title rate">
                  1206.00
                </td>
                <td className="bill-table-total bill-table-header-title amount bill-total-amt">
                  241200.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="bill-amt-in-wrds">
          <span className="bill-amt-in-wrds-title font-family-light">
            Amount in Words :{" "}
          </span>
          Two Lakh Forty One Thousand Two Hundred Only
        </p>
        <div className="bill-contacts-fssi-container">
          <div className="bill-contacts-container ">
            <p className="txt-align-center bill-title-container">Contacts</p>
            <div className="bill-owners-container font-family-light">
              <div>
                <p className="txt-align-center">S.C.Mylsami</p>
                <div className="bill-pno-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="bill-icons"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                  <p>9994574429</p>
                </div>
              </div>
              <div>
                <p className="txt-align-center">S.C.Sekar</p>
                <div className="bill-pno-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="bill-icons"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                  <p>9443362732</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bill-contacts-container">
            <p className="txt-align-center bill-title-container fssi">
              FSSI No
            </p>
            <p className="txt-align-center fssi">12418007000607</p>
          </div>
        </div>
        <div className="bill-bank-sign-container">
          <div className="bill-bank-details-container">
            <div className="bill-title-bank-title">
              <svg
                width="20"
                height="20"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bill-icons"
              >
                <path
                  d="M10.3496 4.86524C10.7419 4.86524 10.9057 4.36124 10.587 4.12891L5.73868 0.602154C5.66944 0.551426 5.58584 0.524078 5.50001 0.524078C5.41418 0.524078 5.33057 0.551426 5.26134 0.602154L0.412996 4.12891C0.0943434 4.35997 0.258113 4.86524 0.651668 4.86524H1.43751V9.61329H0.523445C0.467586 9.61329 0.421882 9.65899 0.421882 9.71485V10.375C0.421882 10.4309 0.467586 10.4766 0.523445 10.4766H10.4766C10.5324 10.4766 10.5781 10.4309 10.5781 10.375V9.71485C10.5781 9.65899 10.5324 9.61329 10.4766 9.61329H9.56251V4.86524H10.3496ZM5.50001 1.49717L8.94171 4.00069H2.05831L5.50001 1.49717ZM2.35157 4.86524H3.83692V9.61329H2.35157V4.86524ZM4.75098 4.86524H6.23634V9.61329H4.75098V4.86524ZM8.64845 9.61329H7.1504V4.86524H8.64845V9.61329Z"
                  fill="#40C057"
                />
              </svg>
              <p>Bank Details</p>
            </div>
            <div className="font-family-light">
              <p className="bill-bank-details ">
                <span>Acc Name &nbsp; :</span> Sakthi Murugan Rice Mill
              </p>
              <p className="bill-bank-details ">
                <span>Bank Name :</span> Canara Bank
              </p>
              <p className="bill-bank-details ">
                <span>Branch&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:</span> Pasur
              </p>
              <p className="bill-bank-details ">
                <span>Acc No&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;: </span>
                1241261002164
              </p>
              <p className="bill-bank-details ">
                <span>IFSC Code&nbsp; &nbsp;:</span> CNRB0001241
              </p>
            </div>
          </div>
          <div className="bill-bank-details-container txt-align-center bill-sign-container">
            <p>For SAKTHI MURUGAN RICE MILL</p>

            <div className="bill-auth-sign-container font-family-light">
              <p>Authorised Signatory</p>
            </div>
            <div className="bill-eoe font-family-light">
              <p>E & O E</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillTemplate;
