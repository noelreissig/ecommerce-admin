import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";

function AdminCreateCategory({
  newCategory,
  showCreate,
  setShowCreate,
  setRefresh,
}) {
  const { token } = useSelector((state) => state.authReducer);
  const [createCategory, setCreateCategory] = useState("");
  const [imgCreateCategory, setImgCreateCategory] = useState();

  async function handleCreate(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    console.log("Soy el create");
    const response = await axios({
      method: "post",
      url: `http://localhost:3001/api/category`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    setCreateCategory("");
    setRefresh(true);
  }

  const handleClose = () => setShowCreate(false);

  return (
    <>
      <Modal show={showCreate} onHide={handleClose}>
        <Modal.Header closeButton className="btn btn-white">
          <Modal.Title>Crear Categoría</Modal.Title>
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
              className="mb-4"
              size="sm"
              type="name"
              name="name"
              value={createCategory}
              onChange={(ev) => setCreateCategory(ev.target.value)}
              placeholder="Ingrese nombre para la nueva categoría"
            />
            <Form.Label className="my-1 mx-3">Imágen</Form.Label>
            <input
              className="form-control my-1 mx-3 w-auto mb-4"
              type="file"
              name="photo_url"
              accept="image/png, image/jpg, image/svg, image/webp"
              // value={imgCreateCategory}
              multiple={false}
              onChange={(ev) => setImgCreateCategory(ev.target.value[0])}
              required
            ></input>
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

export default AdminCreateCategory;
