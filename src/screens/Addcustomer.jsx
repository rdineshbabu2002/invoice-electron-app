import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/screens/Addcustomer.css";

const Addcustomer = (props) => {
  const { id } = useParams();

  const [data, setdata] = useState({
    name: "",
    address: "",
    gstin: "",
  });
  useEffect(() => {
    if (id !== undefined) {
      // console.log(props.id);
      let temp = "";
      if (localStorage.getItem("customers")) {
        temp = localStorage.getItem("customers");

        if (temp) {
          temp = JSON.parse(temp);
          console.log(temp);
        }
      }

      console.log(temp[id]);

      setdata(temp[id]);
    }
  }, [id]);

  const changeValue = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    addcustomer(data);
    // localStorage.removeItem("goods");
    // if (localStorage.getItem("customer")) {
    //   let temp = localStorage.getItem("customer");
    //   if (temp) {
    //     console.log(JSON.parse(temp));
    //   }
    // }
    // console.log(data);
  };

  const addcustomer = (data) => {
    // console.log(data);
    let temp = localStorage.getItem("customers");
    if (!temp) {
      temp = [];
    } else {
      temp = JSON.parse(temp);
    }
    if (id !== undefined) {
      temp[id] = data;
    } else {
      temp = [...temp, { data }];
    }
    console.log(temp);
    localStorage.setItem("customers", JSON.stringify(temp));
  };

  return (
    <div>
      <Navbar />
      <h3 className="title"> Enter Customer Details :</h3>
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
          <label className="formlabel" htmlFor="address">
            Enter Address :
          </label>
          <textarea
            required
            className="forminput"
            name="address"
            rows="4"
            cols="50"
            id="address"
            placeholder="Enter Address"
            onChange={changeValue}
            value={data.address}
          />
        </div>
        <div className="element">
          <label className="formlabel" htmlFor="gstin">
            Enter gstin :
          </label>
          <input
            required
            className="forminput"
            type="text"
            name="gstin"
            value={data.gstin}
            id="gstin"
            placeholder="Enter gstin"
            onChange={changeValue}
          />
        </div>
        <input className="button" type={"submit"} value="Submit" />
      </form>
    </div>
  );
};

export default Addcustomer;
