import React from "react";
import Footer from "../../Footer";
import NavComponent from "../../Navbar";
import { Table } from "react-bootstrap";
import SiderAdmin from "../SiderAdmin";
import adminOrder from "./adminOrder.module.css";
import tableStyles from "../tableStyles.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
const AdminOrder = () => {
	const { token } = useSelector((state) => state.authReducer);

	const [orders, setOrders] = useState([]);
	const [userId, setUserId] = useState("");

	useEffect(() => {
		const getOrders = async () => {
			const response = await axios.get(`http://localhost:3001/api/order`, {
				headers: {
					authorization: `Bearer ${token}`,
				},
			});

			setOrders(response.data);
		};
		getOrders();
	}, []);

	async function handleDelete(id) {
		await axios.delete(`http://localhost:3001/api/users/${id}`, {
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
					<h2 className={`${adminOrder.admin} text-center`}>
						Gestion de Ordenes
					</h2>
					<button className="btn btn-outline-success d-block d-sm-none mx-auto mb-2">
						Volver a Menu
					</button>

					<div className="row px-0">
						<div className="col-md-3 w-auto d-none d-lg-block">
							Administrador
						</div>
					</div>
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
											<th>Fecha Entrega</th>
											<th>Direccion</th>
											<th>Cliente</th>
											<th>Cant Items</th>
											<th>Editar</th>
											<th>Borrar</th>
										</tr>
									</thead>

									<tbody>
										{orders.map((order) => {
											return (
												<tr className="text-center">
													<td className="text-center">
														{order.id}
													</td>
													<td>
														{moment(
															order.deliveryDate
														).format("MMM Do YY")}
													</td>
													<td>{order.deliveryAddress}</td>
													<td>
														{order.user.firstname}{" "}
														{order.user.lastname}
													</td>
													<td>
														{order.products.reduce(
															(acum, item) =>
																acum +
																item.Order_Product
																	.quantity,
															0
														)}
													</td>
													<td>
														<i className="fas fa-edit"></i>
													</td>
													<td>
														<i
															onClick={() => {
																// setUserId(user.id);
																handleDelete(order.id);
															}}
															className="far fa-trash-alt btn btn-white"
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

				<Footer />
			</div>
		</div>
	);
};

export default AdminOrder;
