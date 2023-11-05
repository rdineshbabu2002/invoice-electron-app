import React from "react";
import { downloadJson } from "../utils/generateJson";

const Test = () => {
  const data = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
  };

  const handleDownload = () => {
    downloadJson(data, "t1");
  };
  return (
    <div>
      <button onClick={handleDownload}>download</button>
    </div>
  );
};

export default Test;
