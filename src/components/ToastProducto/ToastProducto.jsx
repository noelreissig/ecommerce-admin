import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const ToastProducto = ({ show, setShow }) => {
  const style = {
    marginTop: "65px",
    zIndex: "5",
  };
  return (
    <div className="">
      <ToastContainer
        position="top-center"
        style={style}
        className="position-fixed overlay"
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
