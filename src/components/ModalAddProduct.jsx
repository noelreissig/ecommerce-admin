import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

function AddProduct() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <>
        <Button variant="light" onClick={handleShow}>
          <i className="fas fa-edit"></i>
        </Button>

        <Modal show={show} onHide={handleClose} enctype="multipart/form-data">
          <Modal.Header closeButton>
            <Modal.Title>Agregar Producto</Modal.Title>
          </Modal.Header>
          <Form.Group className="mx-3" controlId="formBasicText">
            <Form.Label className="my-1">Nombre de Producto</Form.Label>
            <Form.Control size="sm" type="name" />
          </Form.Group>
          <Form.Group className="mx-3" controlId="formBasicText">
            <Form.Label className="my-1">Categoría</Form.Label>
            <Form.Control size="sm" type="name" />
          </Form.Group>
          <Form.Group className=" mx-3" controlId="formBasicText">
            <Form.Label className="my-1">Descripción</Form.Label>
            <Form.Control size="sm" type="text" />
          </Form.Group>
          <Form.Group className=" mx-3" controlId="formBasicNumber">
            <Form.Label className="my-1">Characteristics</Form.Label>
            <Form.Control size="sm" type="number" />
          </Form.Group>
          <Form.Group className=" mx-3" controlId="formBasicEmail">
            <Form.Label className="my-1">Email</Form.Label>
            <Form.Control size="sm" type="email" />
          </Form.Group>

          <Form.Label className="my-1 mx-3">Imágen 1</Form.Label>
          <input
            className="form-control my-1 mx-3 w-auto mb-4"
            id="image"
            placeholder="Ingrese imagen de producto"
            name="image"
            type="file"
            accept="image/png, image/jpg, image/svg, image/webp"
            required
          ></input>
          <Form.Label className="my-1 mx-3">Imágen 2</Form.Label>
          <input
            className="form-control my-1 mx-3 w-auto mb-4"
            id="image"
            placeholder="Ingrese imagen de producto"
            name="image"
            type="file"
            accept="image/png, image/jpg, image/svg, image/webp"
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

export default AddProduct;
