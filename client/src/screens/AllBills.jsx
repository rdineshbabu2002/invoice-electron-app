import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loading from "../screens/Loading";
import { useNavigate } from "react-router-dom";

import "../styles/screens/AllBills.css";
import Modal from "../components/Modal";

const AllBills = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const deleteBill = async (id) => {
    console.log(id);
    setLoading(true);
    const response = await fetch(`/bill/${id}`, {
      method: "DELETE",
    });
    const json = await response.json();
    if (json.status === "success") {
      console.log(json);
      fetchData();
    } else {
      console.log(json);
    }
    setIsModalOpen(false);
    setLoading(false);
  };

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("/allbills");
    const json = await response.json();
    if (json.status === "success") {
      console.log(json.data.bills);
      setBills(json.data.bills);
    } else {
      console.log(json);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const viewBill = (stateValues) => {
    navigate("/bill", { state: stateValues });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="list-container">
        <table className="all-bills-table">
          <thead>
            <tr className="all-bills-tr">
              <th className="all-bills-th">Invoice No</th>
              <th className="all-bills-th">Date</th>
              <th className="all-bills-th">Name</th>
              <th className="all-bills-th">Vehicle No</th>
              <th className="all-bills-th">Options</th>
            </tr>
            {bills.length === 0 && (
              <tr>
                <td></td>
                <td></td>
                <td className="all-bills-td">No Data</td>
                <td></td>
              </tr>
            )}
            {bills.map((bill, index) => {
              console.log(bill.formDetails.name);

              return (
                <tr key={bill._id}>
                  <td className="all-bills-td">{bill.formDetails.invoice}</td>
                  <td className="all-bills-td">{bill.formDetails.date}</td>
                  <td className="all-bills-td">{bill.formDetails.name}</td>
                  <td className="all-bills-td">{bill.formDetails.vehicleNo}</td>
                  <td className="all-bills-td option">
                    <button
                      className="all-bills view-bill-btn"
                      onClick={() => {
                        viewBill(bill);
                      }}
                    >
                      View Bill
                    </button>
                    <button
                      className="all-bills delete-bill-btn"
                      onClick={() => {
                        setDeleteId(bill._id);
                        setIsModalOpen(true);
                      }}
                    >
                      Delete Bill
                    </button>
                  </td>
                </tr>
              );
            })}
          </thead>
        </table>
      </div>

      {/* Delete Modal */}
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setDeleteId={setDeleteId}
      >
        <h2>Are You Sure You Want to Delete!</h2>
        <div className="modal-btn-container">
          <button
            className="modal-btn danger"
            onClick={() => {
              deleteBill(deleteId);
            }}
          >
            Yes
          </button>
          <button
            className="modal-btn"
            onClick={() => {
              setIsModalOpen(false);
              setDeleteId("");
            }}
          >
            No
          </button>
        </div>
      </Modal>
    </>
  );
};

export default AllBills;
