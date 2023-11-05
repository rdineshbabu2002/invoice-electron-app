import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/screens/Addcustomer.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Addcustomer = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isEdit, setIsEdit] = useState(false);

  const [data, setdata] = useState({
    name: "",
    address: "",
    gstin: "",
    distance: 0,
    location: "",
    pincode: 0,
  });

  useEffect(() => {
    if (id !== undefined) {
      setIsEdit(true);
      getCustomer();
    }
  }, [id]);

  const changeValue = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const getCustomer = async () => {
    const response = await fetch(`/api/customer/${id}`);
    const json = await response.json();
    console.log(json);
    if (json.status === "success") {
      console.log(json.data);
      setdata(json.data);
    } else {
      console.log(json);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    addcustomer(data);
  };

  const addcustomer = (data) => {
    if (isEdit) {
      updateCustomer(data);
    } else {
      uploadData();
    }
    navigate("/");
  };

  const uploadData = async () => {
    const response = await fetch("/api/customer/createcustomer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();
    console.log(json);
    if (json.status === "success") {
      console.log(json);
      navigate("/");
    } else {
      console.log(json);
    }
  };

  const updateCustomer = async (data) => {
    const response = await fetch(`/api/customer/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();
    console.log(json);
    if (json.status === "success") {
      console.log(json);
      toast.success("Customer Updated Successfully");
      navigate("/");
    } else {
      console.log(json);
      toast.error(json.message);
    }
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
        <div className="element">
          <label className="formlabel" htmlFor="gstin">
            Enter Disance :
          </label>
          <input
            required
            className="forminput"
            type="number"
            name="distance"
            value={data.distance}
            id="distance"
            placeholder="Enter Distance"
            onChange={changeValue}
          />
        </div>
        <div className="element">
          <label className="formlabel" htmlFor="gstin">
            Enter Location :
          </label>
          <input
            required
            className="forminput"
            name="location"
            value={data.location}
            id="location"
            placeholder="Enter Location"
            onChange={changeValue}
          />
        </div>
        <div className="element">
          <label className="formlabel" htmlFor="gstin">
            Enter Pincode :
          </label>
          <input
            required
            className="forminput"
            type="number"
            name="pincode"
            value={data.pincode}
            id="pincode"
            placeholder="Enter Pincode"
            onChange={changeValue}
          />
        </div>
        <input className="button" type={"submit"} value="Submit" />
      </form>
    </div>
  );
};

export default Addcustomer;
