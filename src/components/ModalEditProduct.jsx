import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

function EditProduct({ product, show, setShow, setRefresh }) {
  // const [editProduct, setEditProduct] = useState(false);
  const [stared, setStared] = useState(false);
  const [editProduct, setEditProduct] = useState(product.name);

  const handleClose = () => setShow(false);

  useEffect(() => {
    setEditProduct(product.name);
  }, [product.name]);

  async function handleUpdate(id) {
    await axios({
      method: "patch",
      url: `http://localhost:3001/api/product/${id}`,
      data: { name: editProduct },
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    });
    setRefresh(true);
  }

  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose} enctype="multipart/form-data">
          <Modal.Header closeButton>
            <Modal.Title>Modificar Producto</Modal.Title>
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
          <Form.Group className=" mx-3" controlId="formBasicNumber">
            <Form.Label className="my-1">Precio</Form.Label>
            <Form.Control size="sm" type="number" />
          </Form.Group>
          <Form.Group className=" mx-3" controlId="formBasicNumber">
            <Form.Label className="my-1">Stock</Form.Label>
            <Form.Control size="sm" type="number" />
          </Form.Group>
          <Form.Group className=" mx-3" controlId="formBasicNumber">
            <Form.Label className="my-1">Destacado</Form.Label>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                checked={stared}
                onClick={() => setStared((prev) => !prev)}
              />
              <label
                className="form-check-label"
                for="flexSwitchCheckChecked"
              ></label>
            </div>
            <Form.Control size="sm" type="number" />
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

export default EditProduct;
