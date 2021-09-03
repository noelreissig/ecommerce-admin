import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";

function AdminEditCategory({ category, show, setShow, setShowOk, setRefresh }) {
	const { token } = useSelector((state) => state.authReducer);
	const [editCategory, setEditCategory] = useState(category.name);

	const handleClose = () => setShow(false);

	async function handleUpdate(ev) {
		ev.preventDefault();
		const formData = new FormData(ev.target);
		await axios({
			method: "patch",
			url: `${process.env.REACT_APP_API_URL}/api/category/${category.id}`,
			data: formData,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		setShowOk(true);
		setRefresh(true);
		handleClose();
	}

	return (
		<div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton className="btn btn-white">
					<Modal.Title>Editar Categoría</Modal.Title>
				</Modal.Header>
				<Form enctype="multipart/form-data" onSubmit={handleUpdate}>
					<Form.Group className="mx-3 my-3" controlId="formBasicText">
						<Form.Label className="">Nombre</Form.Label>
						<Form.Control
							className="mb-4"
							size="sm"
							type="text"
							name="name"
							required
							value={editCategory}
							onChange={(ev) => setEditCategory(ev.target.value)}
						/>
						<Form.Label className="my-1 mx-3">Imágen</Form.Label>
						<img
							className="img-fluid w-25 mb-2 d-inline"
							src={`${process.env.REACT_APP_SUPABASE_URL_CAT}${category.photo_url}`}
							alt={category.name}
						/>
						<input
							className="form-control my-1 mx-3 w-auto mb-4"
							type="file"
							name="photo_url"
							accept="image/png, image/jpg, image/svg, image/webp"
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
		</div>
	);
}

export default AdminEditCategory;
