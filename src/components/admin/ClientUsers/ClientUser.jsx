import React from "react";
import { Table } from "react-bootstrap";
import SiderAdmin from "../SiderAdmin";
import clientUser from "./clientUser.module.css";
import tableStyles from "../tableStyles.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import axios from "axios";

const ClientUser = () => {
	const { token } = useSelector((state) => state.authReducer);

	const [clients, setClients] = useState([]);
	const [clientId, setClientId] = useState("");

	useEffect(() => {
		const getUsers = async () => {
			const response = await axios.get(
				`${process.env.REACT_APP_API_URL}/api/users`,
				{
					headers: {
						authorization: `Bearer ${token}`,
					},
				}
			);
			setClients(response.data);
		};
		getUsers();
	}, []);

	async function handleDelete() {
		await axios.delete(`${process.env.REACT_APP_API_URL}/api/users/${clientId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}

	return (
		<div>
			<div className={clientUser.imgBackground}>
				<div className="container min-vh-100">
					<h2 className={`${clientUser.admin} text-center text-white`}>
						Gestion de Clientes
					</h2>
					<Link to="/admin" className="text-decoration-none">
						<button className="btn btn-success d-block d-sm-none mx-auto mb-2 ">
							Volver a Menú
						</button>
					</Link>
					<div className="d-flex justify-content-center">
						<button className="btn btn-success mb-3 ">Agregar cliente</button>
					</div>
					<div className="row px-0">
						<div className="col-md-3 w-auto d-none d-lg-block">
							<SiderAdmin />
						</div>
						<div className="col-md-9">
							<div
								className={`${tableStyles.font} table-responsive-md bg-white`}
							>
								<Table striped bordered hover>
									<thead>
										<tr className="text-center">
											<th>Id</th>
											<th>Nombre</th>
											<th>Apellido</th>
											<th>Telef</th>
											<th>Direccion</th>
											<th>Editar</th>
											<th>Borrar</th>
										</tr>
									</thead>
									<tbody>
										{clients.map((client) => {
											return (
												<tr className="text-center">
													<td className="text-center">
														{client.id}
													</td>
													<td>{client.firstname}</td>
													<td>{client.lastname}</td>
													<td>{client.phone}</td>
													<td>{client.address}</td>
													<td>
														<i className="fas fa-edit text-success"></i>
													</td>
													<td>
														<i
															onClick={() => {
																setClientId(client.id);
																handleDelete();
															}}
															className="far fa-trash-alt btn btn-white text-danger"
														></i>
													</td>
												</tr>
											);
										})}
									</tbody>
								</Table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClientUser;
