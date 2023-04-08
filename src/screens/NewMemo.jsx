import React, { useEffect, useState } from "react";
import "../styles/screens/NewMemo.css";
import Navbar from "../components/Navbar";
const NewMemo = () => {
  const [headerValues, setHeaderValues] = useState({
    name: "",
    date: "",
  });

  const [tableValues, setTableValues] = useState([
    {
      rate0: 0,
      amount0: 0,
      total0: 0,
    },
  ]);

  const handleHeaderChange = (e) => {
    const { name, value } = e.target;
    setHeaderValues({ ...headerValues, [name]: value });
  };

  const tableInputChangeHandler = (e, index) => {
    let temp = tableValues;
    const { name, value } = e.target;
    temp[index][name] = value;
    temp[index][`total${index}`] =
      temp[index][`rate${index}`] * temp[index][`amount${index}`];
    setTableValues([...temp]);
  };

  const addRowHandler = () => {
    let index = tableValues.length;

    let temp = {};
    temp[`rate${index}`] = 0;
    temp[`amount${index}`] = 0;
    temp[`total${index}`] = 0;
    setTableValues([...tableValues, temp]);
  };

  return (
    <>
      <Navbar />
      <div>
        <form action="" className="memo-form-container">
          <div className="input-container">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              className="billforminput"
              name="name"
              id="name"
              onWheel={(e) => e.target.blur()}
              onChange={handleHeaderChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="name">Date : </label>
            <input
              type="text"
              className="billforminput"
              name="date"
              id="date"
              onWheel={(e) => e.target.blur()}
              onChange={handleHeaderChange}
              required
            />
          </div>

          <div className="input-table-container">
            <table>
              <thead>
                <tr>
                  <th className="th">Rate</th>
                  <th className="th">Amount</th>
                  <th className="th">Total</th>
                </tr>
              </thead>
              <tbody>
                {tableValues.map((singleValue, index) => {
                  return (
                    <tr key={tableValues + index}>
                      <td className="td">
                        <input
                          type="number"
                          name={`rate${index}`}
                          className="form-table-inputs"
                          value={singleValue[`rate${index}`]}
                          onWheel={(e) => e.target.blur()}
                          onChange={(e) => {
                            tableInputChangeHandler(e, index);
                          }}
                        />
                      </td>
                      <td className="td">
                        <input
                          type="number"
                          name={`amount${index}`}
                          className="form-table-inputs"
                          value={singleValue[`amount${index}`]}
                          onWheel={(e) => e.target.blur()}
                          onChange={(e) => {
                            tableInputChangeHandler(e, index);
                          }}
                        />
                      </td>
                      <td className="td">
                        <input
                          type="number"
                          name={`total${index}`}
                          className="form-table-inputs"
                          value={singleValue[`total${index}`]}
                          disabled
                          onWheel={(e) => e.target.blur()}
                        />
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td></td>
                  <td></td>
                  <td className="td">
                    <p className="form-add-row-button" onClick={addRowHandler}>
                      + Add Row
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="memo-btn-container">
            <button className="submit-btn">
              <p>Submit</p>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewMemo;
