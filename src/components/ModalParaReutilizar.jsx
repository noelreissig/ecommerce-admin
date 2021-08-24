import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

function AdminEditCategory() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <>
        <Button variant="sucess" onClick={handleShow}>
          <i class="fas fa-edit"></i>
        </Button>

        <Modal show={show} onHide={handleClose} enctype="multipart/form-data">
          <Modal.Header closeButton>
            <Modal.Title>Editar Perfil</Modal.Title>
          </Modal.Header>
          <Form.Group className=" mx-3 " controlId="formBasicText">
            <Form.Label className="my-1">Nombre</Form.Label>
            <Form.Control size="sm" type="name" />
          </Form.Group>
          <Form.Group className=" mx-3 " controlId="formBasicText">
            <Form.Label className="my-1">Apellido</Form.Label>
            <Form.Control size="sm" type="name" />
          </Form.Group>
          <Form.Group className=" mx-3" controlId="formBasicText">
            <Form.Label className="my-1">Dirección</Form.Label>
            <Form.Control size="sm" type="text" />
          </Form.Group>
          <Form.Group className=" mx-3" controlId="formBasicNumber">
            <Form.Label className="my-1">Teléfono</Form.Label>
            <Form.Control size="sm" type="number" />
          </Form.Group>
          <Form.Group className=" mx-3" controlId="formBasicEmail">
            <Form.Label className="my-1">Email</Form.Label>
            <Form.Control size="sm" type="email" />
          </Form.Group>
          <Form.Group className=" mx-3" controlId="formBasicPassword">
            <Form.Label className="my-1">Contraseña</Form.Label>
            <Form.Control size="sm" type="password" />
          </Form.Group>
          <Form.Label className="my-1 mx-3">Imágen</Form.Label>
          <input
            class="form-control my-1 mx-3 w-auto mb-4"
            id="image"
            placeholder="Enter article background image here..."
            name="image"
            type="file"
            accept="image/png, image/jpg, image/svg"
            required
          ></input>

          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
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
