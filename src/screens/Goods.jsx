import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/screens/Goods.css";

import { Link } from "react-router-dom";

const Goods = () => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    const datas = localStorage.getItem("goods");
    if (datas) {
      setGoods(JSON.parse(datas));
    }
  }, []);

  const deleteGoods = (i) => {
    let temp = localStorage.getItem("goods");
    if (temp) {
      temp = JSON.parse(temp);
      temp.splice(i, 1);
      localStorage.setItem("goods", JSON.stringify(temp));
      setGoods(temp);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="goods-header">
        <p>ADD GOODS</p>
        <Link to="/newgoods" className="add-goods">
          Add Goods
        </Link>
      </div>
      <div className="Goods-cards good-card-container">
        {goods.map((val, i) => {
          return (
            <div className="Indv-cards">
              <div className="Labels">
                <div className="Label-name">
                  <p className="Attribute">NAME:</p>
                  <p className="Attribute-value">{val.name}</p>
                </div>
                <div className="Label-type">
                  <p className="Attribute">HSN-ACS:</p>
                  <p className="Attribute-value">{val["hsn-acs"]}</p>
                </div>
                <div className="Label-qty">
                  <p className="Attribute">QUANTITY:</p>
                  <p className="Attribute-value">{val.qty}</p>
                </div>
                <div className="Label-price">
                  <p className="Attribute">PRICE:</p>
                  <p className="Attribute-value">{val.rate}</p>
                </div>
              </div>
              <div className="buttons">
                <div className="Delete" onClick={() => deleteGoods(i)}>
                  <button className="delete-btn">DELETE</button>
                </div>
                <div className="Edit">
                  <Link to={"/newgoods/" + i}>
                    <button className="edit-btn">EDIT</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Goods;
