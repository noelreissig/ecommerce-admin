import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function AdminCreateProduct({
  product,
  showCreate,
  setShowCreate,
  setRefresh,
}) {
  const { token } = useSelector((state) => state.authReducer);
  const [categories, setCategories] = useState([]);

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
  {
  }
  async function handleCreate(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);

    const response = await axios({
      method: "post",
      url: `http://localhost:3001/api/product`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    setRefresh(true);
  }

  const handleClose = () => setShowCreate(false);

  return (
    <>
      <Modal size="lg" show={showCreate} onHide={handleClose}>
        <Modal.Header closeButton className="btn btn-white">
          <Modal.Title>Ingresar Nuevo Producto</Modal.Title>
        </Modal.Header>
        <Form
          enctype="multipart/form-data"
          onSubmit={(ev) => {
            handleCreate(ev);
            handleClose();
          }}
        >
          <Form.Group className="mx-3 my-3" controlId="formBasicText">
            <Form.Label className="">Nombre</Form.Label>
            <Form.Control
              className="mb-2"
              size="md"
              type="text"
              name="name"
              // value=""
              placeholder="Ingrese nombre para nuevo producto"
              required
            />
            <Form.Label className="">Descripción</Form.Label>
            <Form.Control
              className="mb-2"
              placeholder="Ingrese descripción del producto"
              size="sm"
              as="textarea"
              rows={3}
              type="text"
              name="description"
              // value=""
              required
            />
            <Form.Label className="">Detalles</Form.Label>
            <Form.Control
              className="mb-2"
              size="sm"
              as="textarea"
              rows={3}
              type="name"
              name="details"
              // value=""
              placeholder="Ingrese detalles sobre el producto"
              required
            />
            <div className="row mb-3">
              <div className="col-md-6 mb-2 d-inline">
                <Form.Label className="my-1">Imágen 1</Form.Label>
                <input
                  className="form-control my-1 w-auto mb-2"
                  type="file"
                  name="picture_url"
                  accept="image/png, image/jpg, image/svg, image/webp"
                  // value=""
                  multiple={true}
                  required
                ></input>
              </div>
              <div className="col-md-6 mb-2 d-inline">
                <Form.Label className="my-1">Imágen 2</Form.Label>
                <input
                  className="form-control my-1 w-auto mb-2"
                  type="file"
                  name="picture_2_url"
                  accept="image/png, image/jpg, image/svg, image/webp"
                  // value=""
                  multiple={false}
                  required
                ></input>
              </div>
            </div>
            <div className="row mb-3 ">
              <div className="col-md-4 mb-3 d-inline">
                <Form.Label className="d-inline">Precio en USD</Form.Label>
                <Form.Control
                  className="form-control ms-2 w-25 d-inline ps-2"
                  size="sm"
                  type="number"
                  name="price"
                  // value=""
                  required
                />
              </div>
              <div className="col-md-4 mb-3 d-inline">
                <Form.Label className="d-inline">Stock</Form.Label>
                <Form.Control
                  className="form-control ms-2 w-auto d-inline"
                  size="sm"
                  type="number"
                  name="stock"
                  // value=""
                  required
                />
              </div>
              <div className="col-md-4 mb-3 d-inline">
                <Form.Label className="d-inline me-2">Destacado</Form.Label>
                <select
                  name="stared"
                  id="stared"
                  className="ms-2 px-2"
                  name="stared"
                >
                  <option value={0}>No</option>
                  <option value={1}>Si</option>
                </select>
              </div>
            </div>
            <Form.Label className="my-2 py-2 pe-2">
              Defina una categoría para su producto
            </Form.Label>
            <select name="categoryId" required>
              {categories.map((category) => (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </Form.Group>

          <Modal.Footer>
            <Button variant="success" type="submit">
              Crear
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AdminCreateProduct;
