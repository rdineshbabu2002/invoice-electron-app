import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/screens/NewBill.css";
import inWords from "../utils/amountInWords";
import Select from "react-select";
import updateLocalStorage from "../utils/updateLocalStorage";

const NewBill = () => {
  const submitHandler = () => {};

  const [containsGST, setContainsGST] = useState(false);
  const [gstPercentage, setGSTPercentage] = useState(0);
  const [productDetails, setProductDetails] = useState([]);
  const [productValues, setProductValues] = useState([]);
  const [tableValues, setTableValues] = useState([
    {
      productDescription0: "",
      weight0: 0, //26
      bags0: 0,
      qty0: 0, //bag *
      rate0: 0,
      amount0: 0,
    },
  ]);
  const [tableTotalValues, setTableTotalValues] = useState({
    bags: 0,
    qty: 0,
    amount: 0,
    gst: 0,
    totalAmount: 0,
  });

  const gstToogle = (e) => {
    setContainsGST(e.target.checked);
  };

  useEffect(() => {
    updateLocalStorage();

    let temp = localStorage.getItem("goods");
    temp = JSON.parse(temp);

    setProductDetails(temp);
    let values = [];
    temp.map((singleProduct) => {
      values.push({ label: singleProduct.name, value: singleProduct.name });
    });

    setProductValues(values);
  }, []);

  useEffect(() => {
    const updateTableValues = () => {
      let temp = [];

      tableValues.map((singleValue, index) => {
        let a = singleValue.qty0 * singleValue.rate0;
        temp.push({ ...singleValue, [`amount${index}`]: a });
      });
    };

    const calculateTotalRow = () => {
      let bags = 0;
      let qty = 0;
      let amount = 0;

      tableValues.map((singleValue, i) => {
        bags += parseFloat(singleValue[`bags${i}`]);
        qty += parseFloat(singleValue[`qty${i}`]);
        amount += parseFloat(singleValue[`amount${i}`]);
      });

      let gst = 0;
      if (containsGST) {
        console.log(gstPercentage);
        gst = (amount * gstPercentage) / 100;
      }
      let totalAmount = amount + gst + gst;

      setTableTotalValues({ bags, qty, amount, gst, totalAmount });
    };
    updateTableValues();
    calculateTotalRow();
  }, [tableValues, containsGST, gstPercentage]);

  const inputChangeHandler = (e, index) => {
    const temp = tableValues;
    console.log(temp[index][`${e.target.name}`]);
    temp[index][`${e.target.name}`] = e.target.value;

    temp[index][`qty${index}`] =
      temp[index][`weight${index}`] * temp[index][`bags${index}`];

    temp[index][`amount${index}`] =
      temp[index][`bags${index}`] * temp[index][`rate${index}`];
    setTableValues([...temp]);
  };

  const addRowHandler = () => {
    let index = tableValues.length;
    let temp = {};

    temp[`productDescription${index}`] = "";
    temp[`weight${index}`] = 0;
    temp[`bags${index}`] = 0;
    temp[`qty${index}`] = 0;
    temp[`rate${index}`] = 0;
    temp[`amount${index}`] = 0;

    console.log([...tableValues, temp]);

    setTableValues([...tableValues, temp]);
  };

  const selectHandler = (e, index) => {
    console.log(e.value);

    let filteredValue = productDetails.filter((product) => {
      return product.name === e.value;
    });

    filteredValue = filteredValue[0];

    let temp = tableValues;
    console.log(temp, index);
    temp[index][`productDescription${index}`] = filteredValue.name;
    temp[index][`weight${index}`] = filteredValue.qty;
    temp[index][`rate${index}`] = filteredValue.rate;

    setTableValues([...temp]);
  };

  return (
    <di>
      <Navbar />
      <form action="" onSubmit={submitHandler} className="form-container">
        <div className="input-container">
          <label htmlFor="">Invoice No : </label>
          <input
            type="number"
            className="billforminput"
            name="invoice"
            id="invoice"
            onWheel={(e) => e.target.blur()}
          />
        </div>
        <div className="input-container">
          <label htmlFor="">Name : </label>
          <Select className="input-select" />
        </div>
        <div className="input-container">
          <label htmlFor="">Date :</label>
          <input type="text" className="billforminput" />
        </div>
        <div className="input-container">
          <label htmlFor="">GST :</label>
          <input
            type="checkbox"
            className="input-check-box"
            onClick={gstToogle}
          />
        </div>
        {containsGST && (
          <div className="input-container">
            <label htmlFor="">Percent :</label>
            <input
              type="number"
              className="billforminput"
              value={gstPercentage}
              onWheel={(e) => e.target.blur()}
              onChange={(e) => {
                setGSTPercentage(e.target.value);
              }}
            />
          </div>
        )}
        <div className="input-table-container">
          <table>
            <thead>
              <tr className="tr">
                <th className="th">Product Description</th>
                <th className="th">Bags</th>
                <th className="th">Qty</th>
                <th className="th">Rate</th>
                <th className="th">Amount</th>
              </tr>
            </thead>
            <tbody>
              {tableValues.map((singleValue, index) => {
                return (
                  <tr className="tr" key={tableValues}>
                    <td className="td">
                      <Select
                        className="form-table-selects"
                        name={"productDescription" + index}
                        options={productValues}
                        defaultValue={{
                          label: `${singleValue[`productDescription` + index]}`,
                          value: `${singleValue[`productDescription` + index]}`,
                        }}
                        onChange={(e) => {
                          selectHandler(e, index);
                        }}
                      />
                    </td>
                    <td className="td">
                      <input
                        type={"number"}
                        className="form-table-inputs"
                        name={"bags" + index}
                        onWheel={(e) => e.target.blur()}
                        value={`${singleValue["bags" + index]}`}
                        onChange={(e) => {
                          inputChangeHandler(e, index);
                        }}
                      />
                    </td>
                    <td className="td">
                      <input
                        type="number"
                        className="form-table-inputs"
                        name={"qty" + index}
                        disabled
                        value={`${singleValue["qty" + index]}`}
                        onChange={(e) => {
                          inputChangeHandler(e, index);
                        }}
                      />
                    </td>
                    <td className="td">
                      <input
                        type="number"
                        className="form-table-inputs"
                        name={"rate" + index}
                        disabled
                        value={`${singleValue["rate" + index]}`}
                        onChange={(e) => {
                          inputChangeHandler(e, index);
                        }}
                      />
                    </td>
                    <td className="td">
                      <input
                        type="number"
                        className="form-table-inputs"
                        name={"amount" + index}
                        disabled
                        value={`${singleValue["amount" + index]}`}
                        onChange={(e) => {
                          inputChangeHandler(e, index);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
              <tr className="tr">
                <td className="td"></td>
                <td className="td"></td>
                <td className="td"></td>
                <td className="td"></td>
                <td className="td">
                  <p className="form-add-row-button" onClick={addRowHandler}>
                    + Add Row
                  </p>
                </td>
              </tr>
            </tbody>
            <tfoot>
              {containsGST && (
                <>
                  <tr className="tr">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="td">CGST - {gstPercentage} %</td>
                    <td className="td">{tableTotalValues.gst}</td>
                  </tr>
                  <tr className="tr">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="td">SGST - {gstPercentage} %</td>
                    <td className="td">{tableTotalValues.gst}</td>
                  </tr>
                </>
              )}
              <tr className="tr">
                <td className="td">Total</td>
                <td className="td">
                  <input
                    type="number"
                    className="form-table-inputs"
                    disabled
                    value={tableTotalValues.bags}
                  />
                </td>
                <td className="td">
                  <input
                    type="number"
                    className="form-table-inputs"
                    disabled
                    value={tableTotalValues.qty}
                  />
                </td>
                <td className="td"></td>
                <td className="td">
                  <input
                    type="number"
                    className="form-table-inputs"
                    disabled
                    value={tableTotalValues.totalAmount}
                  />
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </form>
    </di>
  );
};

export default NewBill;
