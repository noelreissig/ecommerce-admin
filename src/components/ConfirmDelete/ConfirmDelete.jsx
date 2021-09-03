import React from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";

function ConfirmDelete({ showDelete, setShowDelete, setRefresh, product }) {
  const { token } = useSelector((state) => state.authReducer);
  const [productsList, setProductsList] = useState([]);

  async function handleDelete(id) {
    await axios.delete(`${process.env.REACT_APP_API_URL}/api/product/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setRefresh(true);
  }

  const handleClose = () => setShowDelete(false);

  return (
    <>
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header closeButton className="btn btn-white">
          <Modal.Title>Esta seguro que desea eliminar?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
              handleDelete(product.id);
              handleClose();
            }}
          >
            Confirmar
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmDelete;
