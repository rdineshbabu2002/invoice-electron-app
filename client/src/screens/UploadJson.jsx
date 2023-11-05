import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/screens/UploadJson.css";
import { toast } from "react-toastify";

const UploadJson = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("excelFile", file);

    try {
      const response = await fetch("/api/bill/uploadjson", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        toast.success("File uploaded successfully");
      } else {
        console.error(
          "File upload failed:",
          response.status,
          response.statusText
        );
        toast.error("File upload failed");
      }
    } catch (error) {
      console.error("File upload failed: ", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="upload-json-container">
        <div>
          <p className="upload-json-text">Upload the Excel File Generated</p>
          <input type="file" accept=".xls,.xlsx" onChange={handleFileChange} />
          <button onClick={handleFileUpload} className="upload-button">
            Upload Excel
          </button>
        </div>
      </div>
    </>
  );
};

export default UploadJson;
