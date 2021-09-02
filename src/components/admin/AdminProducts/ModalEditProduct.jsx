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
  const [editSlug, setEditSlug] = useState(product.slug);
  const handleClose = () => setShow(false);

  useEffect(() => {
    async function getCategories() {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/api/category`,
      });
      setCategories(response.data);
    }
    getCategories();
  }, [product]);

  async function handleUpdate(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    await axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}/api/product/${product.id}`,
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setRefresh(true);
    handleClose();
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar Producto</Modal.Title>
        </Modal.Header>
        <Form enctype="multipart/form-data" onSubmit={handleUpdate}>
          <Form.Group className="m-3 text-start" controlId="formBasicText">
            <Form.Label className="my-2">Nombre de Producto</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              name="name"
              value={editName}
              onChange={(ev) => setEditName(ev.target.value)}
            />
          </Form.Group>

          <Form.Group className="mx-3" controlId="formBasicText">
            <Form.Label className="my-2 pe-2 pb-2">Categoría Actual</Form.Label>
            <select
              onChange={(ev) => setEditCategory(ev.target.value)}
              name="categoryId"
            >
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
              name="descrption"
              as="textarea"
              rows={5}
              value={editDescription}
              onChange={(ev) => setEditDescription(ev.target.value)}
            />
          </Form.Group>

          <Form.Group className="mx-3" controlId="formBasicNumber">
            <Form.Label className="my-1">Precio</Form.Label>
            <Form.Control
              size="sm"
              type="number"
              name="price"
              value={editPrice}
              onChange={(ev) => setEditPrice(ev.target.value)}
            />
          </Form.Group>
          <Form.Group className="mx-3" controlId="formBasicNumber">
            <Form.Label className="my-1">Stock</Form.Label>
            <Form.Control
              size="sm"
              type="number"
              name="stock"
              value={editStock}
              onChange={(ev) => setEditStock(ev.target.value)}
            />
          </Form.Group>

          <div className="d-flex flex-row g-0 mt-3 ms-3">
            <div className="d-flex row">
              <Form.Label className="my-1 d-inline">Imágen 1</Form.Label>
              <div classname="col-sm-6">
                <img
                  className="img-fluid w-25 mb-2 d-inline"
                  src={`${process.env.REACT_APP_SUPABASE_URL_IMG}${product.picture_url}`}
                  alt={product.name}
                />
                <input
                  className="form-control w-75 mb-4 text-start"
                  id="image"
                  placeholder="Ingrese imagen de producto"
                  name="picture_url"
                  type="file"
                  accept="image/png, image/jpg, image/svg, image/webp"
                ></input>
              </div>
            </div>
            <div className="d-flex row">
              <Form.Label className="my-1 d-inline">Imágen 2</Form.Label>
              <div classname="col-sm-6">
                <img
                  className="img-fluid w-25 mb-2 d-inline"
                  src={`${process.env.REACT_APP_SUPABASE_URL_IMG}${product.picture_2_url}`}
                  alt={product.name}
                />
                <input
                  className="form-control w-75 mb-4 text-start"
                  id="image"
                  placeholder="Ingrese imagen de producto"
                  name="picture_2_url"
                  type="file"
                  accept="image/png, image/jpg, image/svg, image/webp"
                ></input>
              </div>
            </div>
          </div>
          <Modal.Footer>
            <Button variant="success" type="submit">
              Guardar cambios
            </Button>

            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default EditProduct;
