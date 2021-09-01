import React, { useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import ToastProducto from "../../ToastProducto/ToastProducto";

function AdminEditUser({ user, show, setShow, setRefresh }) {
	const { token } = useSelector((state) => state.authReducer);
	const [firstname, setFirstName] = useState(user.firstname);
	const [lastname, setLastName] = useState(user.lastname);
	const [email, setEmail] = useState(user.email);

	const handleClose = () => setShow(false);

	async function handleUpdate(ev) {
		ev.preventDefault();
		const data = {
			firstname: firstname,
			lastname: lastname,
			email: email,
		};
		await axios({
			method: "patch",
			url: `${process.env.REACT_APP_API_URL}/api/admin/${user.id}`,
			data: data,
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
							value={firstname}
							onChange={(ev) => setFirstName(ev.target.value)}
						/>
						<Form.Label className="">Apellido</Form.Label>
						<Form.Control
							className="mb-4"
							size="sm"
							type="text"
							name="name"
							required
							value={lastname}
							onChange={(ev) => setLastName(ev.target.value)}
						/>
						<Form.Label className="">Email</Form.Label>
						<Form.Control
							className="mb-4"
							size="sm"
							type="email"
							name="name"
							required
							value={email}
							onChange={(ev) => setEmail(ev.target.value)}
						/>
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

export default AdminEditUser;
