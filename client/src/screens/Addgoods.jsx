import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Addgoods = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);

  const [data, setdata] = useState({
    name: "",
    "hsn-acs": "",
    qty: 0,
    rate: 0,
  });
  useEffect(() => {
    if (id !== undefined) {
      setIsEdit(true);
      getGoodsById();
    }
  }, [id]);

  const changeValue = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    addgoods(data);
  };

  const getGoodsById = async () => {
    const response = await fetch(`/api/goods/${id}`);
    const json = await response.json();
    console.log(json);
    if (json.status === "success") {
      console.log(json.data);
      setdata(json.data);
    } else {
      console.log(json);
    }
  };

  const uploadGoods = async () => {
    const response = await fetch("/api/goods/creategood", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();
    if (json.status === "success") {
      console.log(json);
    } else {
      console.log(json);
    }
  };

  const updateGoods = async (data) => {
    const response = await fetch(`/api/good/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    if (json.status === "success") {
      console.log(json);
    } else {
      console.log(json);
    }
  };

  const addgoods = () => {
    if (isEdit) {
      updateGoods(data);
    } else {
      uploadGoods();
    }
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
