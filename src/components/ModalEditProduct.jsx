import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

function EditProduct({ product, show, setShow, setRefresh }) {
  console.log("soy el console log de");
  console.log(product);
  // const [editProduct, setEditProduct] = useState(false);
  const [stared, setStared] = useState(false);
  const [editName, setEditName] = useState(product.name);
  // const [editPrice, setEditPrice] = useState(product.price);

  const handleClose = () => setShow(false);

  useEffect(() => {
    setEditName(product.name);
  }, [product.name]);

  async function handleUpdate(id) {
    await axios({
      method: "patch",
      url: `http://localhost:3001/api/product/${id}`,
      data: { name: editName },
      //
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
            <Form.Control
              size="sm"
              type="name"
              value={editName}
              onChange={(ev) => setEditName(ev.target.value)}
            />
          </Form.Group>

          <Form.Group className="mx-3" controlId="formBasicText">
            <Form.Label className="my-1">Categoría</Form.Label>
            <select>
              <option
                value={product && product.category.id}
                key={product && product.category.id}
              >
                {product && product.category.name}
              </option>
            </select>
            {/* <Form.Control
              size="sm"
              type="name"
              value={editCategory}
              onChange={(ev) => setEditCategory(ev.target.value)}
            /> */}
          </Form.Group>
          <Form.Group className="mx-3" controlId="formBasicText">
            <Form.Label className="my-1">Descripción</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              // value={editDescription}
              // onChange={(ev) => setEditDescription(ev.target.value)}
            />
          </Form.Group>
          <Form.Group className=" mx-3" controlId="formBasicNumber">
            <Form.Label className="my-1">Characteristics</Form.Label>
            <Form.Control
              size="sm"
              type="number"
              // value={editCharacteristics}
              // onChange={(ev) => setEditCharacteristics(ev.target.value)}
            />
          </Form.Group>
          <Form.Group className=" mx-3" controlId="formBasicNumber">
            <Form.Label className="my-1">Precio</Form.Label>
            <Form.Control
              size="sm"
              type="number"
              // value={editPrice}
              // onChange={(ev) => setEditPrice(ev.target.value)}
            />
          </Form.Group>
          <Form.Group className=" mx-3" controlId="formBasicNumber">
            <Form.Label className="my-1">Stock</Form.Label>
            <Form.Control
              size="sm"
              type="number"
              // value={editStock}
              // onChange={(ev) => setEditStock(ev.target.value)}
            />
          </Form.Group>
          <Form.Group className=" mx-3" controlId="formBasicNumber">
            <Form.Label className="my-1">Destacado</Form.Label>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                //   checked={stared}
                //   onClick={() => setStared((prev) => !prev)}
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
            <Button
              variant="success"
              onClick={() => {
                handleUpdate(product.id);
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

export default EditProduct;
