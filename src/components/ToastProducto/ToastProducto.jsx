import React from "react";
import { Toast, Row, Col, ToastContainer } from "react-bootstrap";

const ToastProducto = ({ show, setShow }) => {
  return (
    <div className="">
      <ToastContainer position="top-center" style={{ marginTop: "65px" }}>
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={2000}
          bg="success"
          autohide
        >
          <Toast.Body className="text-light text-center">
            Elemento Añadido!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default ToastProducto;
