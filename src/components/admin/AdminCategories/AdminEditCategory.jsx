import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function AdminEditCategory({ category, show, setShow, setRefresh }) {
  //const { token } = useSelector((state) => state.authReducer);
  const [editCategory, setEditCategory] = useState(category.name);
  // console.log(category.name);

  useEffect(() => {
    setEditCategory(category.name);
  }, [category.name]);

  async function handleUpdate(id) {
    await axios({
      method: "patch",
      url: `http://localhost:3001/api/category/${id}`,
      data: { name: editCategory },
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    });
    setRefresh(true);
  }
  const handleClose = () => setShow(false);

  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose} enctype="multipart/form-data">
          <Modal.Header closeButton className="btn btn-white">
            <Modal.Title>Editar Categoría</Modal.Title>
          </Modal.Header>
          <Form.Group className="mx-3 my-3" controlId="formBasicText">
            <Form.Label className="">Nombre</Form.Label>
            <Form.Control
              className="mb-4"
              size="sm"
              type="name"
              value={editCategory}
              onChange={(ev) => setEditCategory(ev.target.value)}
              placeholder="Ingrese el nuevo nombre..."
            />
          </Form.Group>

          <Modal.Footer>
            <Button
              variant="success"
              onClick={() => {
                handleUpdate(category.id);
                handleClose();
              }}
            >
              Guardar cambios
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default AdminEditCategory;
