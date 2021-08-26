import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function EditProduct({ product, show, setShow, setRefresh }) {
  const { token } = useSelector((state) => state.authReducer);
  const [editCategory, setEditCategory] = useState(product.categoryId);
  const [categories, setCategories] = useState([]);
  const [editName, setEditName] = useState(product.name);
  const [editDescription, setEditDescription] = useState(product.description);
  const [editPrice, setEditPrice] = useState(product.price);
  const [editStock, setEditStock] = useState(product.stock);
  const handleClose = () => setShow(false);

  useEffect(() => {
    async function getCategories() {
      const response = await axios({
        method: "get",
        url: `http://localhost:3001/api/category`,
      });
      setCategories(response.data);
    }
    getCategories();
  }, [product]);

  async function handleUpdate(id) {
    await axios({
      method: "patch",
      url: `http://localhost:3001/api/product/${id}`,
      data: {
        name: editName,
        description: editDescription,
        price: editPrice,
        stock: editStock,
        categoryId: editCategory,
      },

      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setRefresh(true);
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose} enctype="multipart/form-data">
        <Modal.Header closeButton>
          <Modal.Title>Modificar Producto</Modal.Title>
        </Modal.Header>
        <Form.Group className="m-3" controlId="formBasicText">
          <Form.Label className="my-2">Nombre de Producto</Form.Label>
          <Form.Control
            size="sm"
            type="name"
            value={editName}
            onChange={(ev) => setEditName(ev.target.value)}
          />
        </Form.Group>

        <Form.Group className="mx-3" controlId="formBasicText">
          <Form.Label className="my-2 pe-2 pb-2">Categoría Actual</Form.Label>
          <select onChange={(ev) => setEditCategory(ev.target.value)}>
            {categories.map((category) => (
              <option
                value={category.id}
                key={category.id}
                selected={category.id == editCategory}
              >
                {category.name}
              </option>
            ))}
          </select>
        </Form.Group>
        <Form.Group className="mx-3" controlId="formBasicText">
          <Form.Label className="my-1">Descripción</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            value={editDescription}
            onChange={(ev) => setEditDescription(ev.target.value)}
          />
        </Form.Group>

        <Form.Group className="mx-3" controlId="formBasicNumber">
          <Form.Label className="my-1">Precio</Form.Label>
          <Form.Control
            size="sm"
            type="number"
            value={editPrice}
            onChange={(ev) => setEditPrice(ev.target.value)}
          />
        </Form.Group>
        <Form.Group className="mx-3" controlId="formBasicNumber">
          <Form.Label className="my-1">Stock</Form.Label>
          <Form.Control
            size="sm"
            type="number"
            value={editStock}
            onChange={(ev) => setEditStock(ev.target.value)}
          />
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
    </div>
  );
}

export default EditProduct;
