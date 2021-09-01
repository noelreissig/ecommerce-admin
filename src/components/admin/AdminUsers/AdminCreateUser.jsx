import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import ToastProducto from "../../ToastProducto/ToastProducto";

function AdminCreateUser({
	newUser,
	showCreate,
	setShowCreate,
	setRefresh,
	setShowOk,
	showOk,
}) {
	const { token } = useSelector((state) => state.authReducer);
	const [firstname, setFirstName] = useState("");
	const [lastname, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function handleCreate(ev) {
		ev.preventDefault();
		const data = {
			firstname: firstname,
			lastname: lastname,
			email: email,
			password: password,
		};
		const response = await axios({
			method: "post",
			url: `${process.env.REACT_APP_API_URL}/api/admin`,
			data: data,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		setRefresh(true);
		setShowOk(true);
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
							type="text"
							name="name"
							required
							onChange={(ev) => setFirstName(ev.target.value)}
						/>
						<Form.Label className="">Apellido</Form.Label>
						<Form.Control
							className="mb-4"
							size="sm"
							type="text"
							name="name"
							required
							onChange={(ev) => setLastName(ev.target.value)}
						/>
						<Form.Label className="">Email</Form.Label>
						<Form.Control
							className="mb-4"
							size="sm"
							type="email"
							name="name"
							required
							onChange={(ev) => setEmail(ev.target.value)}
						/>
						<Form.Label className="">Password</Form.Label>
						<Form.Control
							className="mb-4"
							size="sm"
							type="password"
							name="name"
							required
							onChange={(ev) => setPassword(ev.target.value)}
						/>
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

export default AdminCreateUser;
