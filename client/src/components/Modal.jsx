import React, { useEffect } from "react";
import "../styles/components/Modal.css";

const Modal = ({ isModalOpen, setIsModalOpen, setDeleteId, children }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27 && isModalOpen) {
        setIsModalOpen(false);
        setDeleteId("");
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
