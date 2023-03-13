import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Addgoods = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setdata] = useState({
    name: "",
    "hsn-acs": "",
    qty: 0,
    rate: 0,
  });
  useEffect(() => {
    if (id !== undefined) {
      // console.log(props.id);
      let temp = "";
      if (localStorage.getItem("goods")) {
        temp = localStorage.getItem("goods");
        if (temp) {
          temp = JSON.parse(temp);
        }
      }
      setdata(temp[id]);
    }
  }, []);
  const changeValue = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };
  const submit = (e) => {
    e.preventDefault();
    addgoods(data);
  };

  const addgoods = (data) => {
    let temp = localStorage.getItem("goods");
    if (!temp) {
      temp = [];
    } else {
      temp = JSON.parse(temp);
    }
    if (id !== undefined) {
      temp[id] = data;
    } else {
      temp = [...temp, data];
    }
    // console.log(temp);
    localStorage.setItem("goods", JSON.stringify(temp));
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <h3 className="title"> Enter Goods Details :</h3>
      <form className="addcustomer" onSubmit={submit}>
        <div className="element">
          <label className="formlabel" htmlFor="name">
            Enter Name :
          </label>
          <input
            required
            className="forminput"
            type="text"
            name="name"
            id="name"
            onChange={changeValue}
            placeholder="Enter name"
            value={data.name}
          />
        </div>
        <div className="element">
          <label className="formlabel" htmlFor="hsn_acs">
            Enter HSN_ACS :
          </label>
          <input
            required
            className="forminput"
            name="hsn-acs"
            id="hsn_acs"
            placeholder="Enter HSN_ACS"
            onChange={changeValue}
            value={data["hsn-acs"]}
          />
        </div>
        <div className="element">
          <label className="formlabel" htmlFor="qty">
            Enter Qty :
          </label>
          <input
            required
            className="forminput"
            type="number"
            value={data.qty}
            id="qty"
            name="qty"
            placeholder="Enter Qty"
            onChange={changeValue}
          />
        </div>
        <div className="element">
          <label className="formlabel" htmlFor="rate">
            Enter Rate :
          </label>
          <input
            required
            className="forminput"
            type="number"
            value={data.rate}
            id="rate"
            name="rate"
            placeholder="Enter rate"
            onChange={changeValue}
          />
        </div>
        <input className="button" type={"submit"} value="Submit" />
      </form>
    </div>
  );
};

export default Addgoods;
