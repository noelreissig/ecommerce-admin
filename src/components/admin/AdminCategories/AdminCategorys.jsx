import React from "react";
import { Table } from "react-bootstrap";
import SiderAdmin from "../SiderAdmin";
import adminCategory from "./adminCategorys.module.css";
import tableStyles from "../tableStyles.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminEditCategory from "./AdminEditCategory";
import AdminCreateCategory from "./AdminCreateCategory";
import ToastCannotDeleteCategory from "../../ToastCannotDeleteCategory/ToastCannotDeleteCategory";
import ToastProducto from "../../ToastProducto/ToastProducto";

function AdminCategorys() {
	const { token } = useSelector((state) => state.authReducer);
	const [categories, setCategories] = useState([]);
	const [show, setShow] = useState(false); //prende modal
	const [showOk, setShowOk] = useState(false); //prende toasty
	const [showCannotDelete, setShowCannotDelete] = useState(false);

	const [refresh, setRefresh] = useState(false);
	const [category, setCategory] = useState({});

	const [newCategory, setNewCategory] = useState({});
	const [showCreate, setShowCreate] = useState(false);

	const handleShow = () => {
		setShow(true);
	};

	const handleShowCreate = () => {
		setShowCreate(true);
	};

	// Todas las categorías
	useEffect(() => {
		const getCategories = async () => {
			const response = await axios({
				method: "get",
				url: `${process.env.REACT_APP_API_URL}/api/category`,
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setCategories(response.data);
			setRefresh(false);
		};
		getCategories();
	}, [refresh]);

	// Eliminar categoría
	async function handleDelete(id) {
		try {
			await axios.delete(`${process.env.REACT_APP_API_URL}/api/category/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setCategories((categories) =>
				categories.filter((category) => category.id !== id)
			);
			setShowOk(true);
		} catch (error) {
			setShowCannotDelete(true);
		}
	}

	return (
		<div>
			<div className={adminCategory.imgBackground}>
				<div className="container min-vh-100 w-auto">
					<h2 className={`${adminCategory.admin} text-center text-white`}>
						Gestión de Categorías
					</h2>
					<Link to="/admin" className="text-decoration-none">
						<button className="btn btn-success d-block d-sm-none mx-auto mb-2">
							Volver a Menú
						</button>
					</Link>

					<div className="d-flex justify-content-center">
						<button
							className="btn btn-success mb-3 "
							onClick={() => {
								handleShowCreate();
								setNewCategory(newCategory);
							}}
						>
							Agregar categoría
						</button>
						<AdminCreateCategory
							newCategory={newCategory}
							showCreate={showCreate}
							setShowCreate={setShowCreate}
							setRefresh={setRefresh}
							showOk={showOk}
							setShowOk={setShowOk}
						/>
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
											<th>Categorias</th>
											<th>Editar</th>
											<th>Borrar</th>
										</tr>
									</thead>
									<tbody>
										{categories.map((category) => (
											<tr className="text-center">
												<td className="text-center">
													{category.id}
												</td>
												<td className="text-center">
													{category.name}
												</td>
												<td>
													<i
														onClick={() => {
															handleShow();
															setCategory(category);
														}}
														className="fas fa-edit text-success"
													></i>
												</td>
												<td>
													<button className="btn m-0 p-0">
														<i
															onClick={() => {
																handleDelete(category.id);
															}}
															className="far fa-trash-alt text-danger"
														></i>
													</button>
												</td>
											</tr>
										))}
										<AdminEditCategory
											category={category}
											show={show}
											setShow={setShow}
											setRefresh={setRefresh}
											key={category.name}
											showOk={showOk}
											setShowOk={setShowOk}
										/>
									</tbody>
								</Table>
								<ToastProducto show={showOk} setShow={setShowOk} />
								<ToastCannotDeleteCategory
									show={showCannotDelete}
									setShow={setShowCannotDelete}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminCategorys;
