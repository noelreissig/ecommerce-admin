import React from "react";
import { Toast, Row, Col, ToastContainer } from "react-bootstrap";

const ToastProducto = ({ show, setShow }) => {
  return (
    <div className="">
      <ToastContainer
        position="top-center"
        style={{ marginTop: "35px" }}
        className="position-fixed"
      >
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          bg="success"
          autohide
        >
          <Toast.Body className="text-light text-center">
            Acción realizada exitosamente!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default ToastProducto;
