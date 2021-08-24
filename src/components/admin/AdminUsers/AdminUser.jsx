import React from "react";
import Footer from "../../Footer";
import NavComponent from "../../Navbar";
import { Table } from "react-bootstrap";
import SiderAdmin from "../SiderAdmin";
import adminUser from "./adminUser.module.css";
import tableStyles from "../tableStyles.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const AdminUser = () => {
	const { token } = useSelector((state) => state.authReducer);

	const [users, setUsers] = useState([]);
	const [userId, setUserId] = useState("");

	useEffect(() => {
		const getUsers = async () => {
			const response = await axios.get(`http://localhost:3001/api/admin`, {
				headers: {
					authorization: `Bearer ${token}`,
				},
			});

			setUsers(response.data);
		};
		getUsers();
	}, []);

	async function handleDelete() {
		await axios.delete(`http://localhost:3001/api/users/${userId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}

	return (
		<div>
			<div>
				<NavComponent />
				<div className="container min-vh-100">
					<h2 className={`${adminUser.admin} text-center`}>
						Gestion de Categorias
					</h2>
					<div className="row px-0">
						<div className="col-md-3 w-auto ">
							<SiderAdmin />
						</div>
						<div className="col-md-9 ">
							<div
								className={`${tableStyles.font} pb-2 table-responsive-md`}
							>
								<Table striped bordered hover>
									<thead>
										<tr className="text-center ">
											<th>Id</th>
											<th>Nombre</th>
											<th>Apellido</th>
											<th>Email</th>
											<th>Editar</th>
											<th>Borrar</th>
										</tr>
									</thead>

									<tbody>
										{users.map((user) => {
											return (
												<tr className="text-center">
													<td className="text-center">
														{user.id}
													</td>
													<td>{user.firstname}</td>
													<td>{user.lastname}</td>
													<td>{user.email}</td>
													<td>
														<i class="fas fa-edit"></i>
													</td>
													<td>
														<i
															onClick={() => {
																setUserId(user.id);
																handleDelete();
															}}
															class="far fa-trash-alt btn btn-white"
														></i>
													</td>
												</tr>
											);
										})}
									</tbody>
								</Table>
								<button className="btn btn-success ">
									Agregar categoría
								</button>
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</div>
	);
};

export default AdminUser;
