import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // const [contents, setContents] = useState([]);
  // const [name, setName] = useState("");

  // const fetchContents = () => {
  //   if (localStorage.getItem("content")) {
  //     let temp = localStorage.getItem("content");
  //     if (temp) {
  //       setContents(JSON.parse(temp));
  //       console.log(JSON.parse(temp));
  //     }
  //   }
  // };

  // const addContent = (name) => {
  //   let temp = localStorage.getItem("content");
  //   if (!temp) {
  //     temp = [];
  //   } else {
  //     temp = JSON.parse(temp);
  //   }

  //   temp = [...temp, { name }];

  //   localStorage.setItem("content", JSON.stringify(temp));
  // };

  // useEffect(() => {
  //   fetchContents();
  // }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <Link to={"/bill"}>To Go to Bill Page</Link>

      {/* <div>
        <label htmlFor="">Name : </label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            addContent(name);
            fetchContents();
            setName("");
          }}
        >
          Add
        </button>
      </div>

      {contents.map((singleContent) => {
        return <p key={singleContent.name}>{singleContent.name}</p>;
      })} */}
    </div>
  );
};

export default Home;
