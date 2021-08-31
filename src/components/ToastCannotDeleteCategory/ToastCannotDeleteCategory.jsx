import React from "react";
import { Toast, Row, Col, ToastContainer } from "react-bootstrap";

const ToastCannotDeleteCategory = ({ show, setShow }) => {
  return (
    <div className="">
      <ToastContainer position="top-center" style={{ marginTop: "35px" }}>
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={2500}
          bg="danger"
          autohide
        >
          <Toast.Body className="text-light text-center">
            No se pueden eliminar categorías con productos asociados.
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default ToastCannotDeleteCategory;
