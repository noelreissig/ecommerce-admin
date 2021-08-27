import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function AdminEditCategory({ category, show, setShow, setRefresh }) {
  //const { token } = useSelector((state) => state.authReducer);
  const [editCategory, setEditCategory] = useState(category.name);
  const [imgEditCategory, setImgEditCategory] = useState(category.photo_url);

  useEffect(() => {
    setEditCategory(category.name);
    setImgEditCategory(category.photo_url);
  }, [category.name][category.photo_url]);

  async function handleUpdate(id, ev) {
    const formData = new FormData(ev.target);
    await axios({
      method: "patch",
      url: `http://localhost:3001/api/category/${id}`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        //   Authorization: `Bearer ${token}`,
      },
    });
    setRefresh(true);
  }
  const handleClose = () => setShow(false);

  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton className="btn btn-white">
            <Modal.Title>Editar Categoría</Modal.Title>
          </Modal.Header>
          <Form
            enctype="multipart/form-data"
            // onClick={() => {
            //   handleUpdate(category.id);
            //   handleClose();
            // }}
            onSubmit={(ev) => {
              handleUpdate(category.id, ev);
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
                required
                value={editCategory}
                onChange={(ev) => setEditCategory(ev.target.value)}
              />
              <Form.Label className="my-1 mx-3">Imágen</Form.Label>
              <input
                className="form-control my-1 mx-3 w-auto mb-4"
                type="file"
                name="photo_url"
                accept="image/png, image/jpg, image/svg, image/webp"
                multiple={false}
                onChange={(ev) => setImgEditCategory(ev.target.value[0])}
                required
              ></input>
            </Form.Group>

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
      </>
    </div>
  );
}

export default AdminEditCategory;
