import React from "react";
import { Table } from "react-bootstrap";
import SiderAdmin from "../SiderAdmin";
import adminCategory from "./adminCategorys.module.css";
import tableStyles from "../tableStyles.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function AdminCategorys() {
  const { token } = useSelector((state) => state.authReducer);
  const [categories, setCategories] = useState([]);
  // const [categoriesId, setCategoriesId] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get(`http://localhost:3001/api/category`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setCategories(response.data);
    };
    getCategories();
  }, []);
  console.log(categories);

  // async function handleDelete() {
  // 	await axios.delete(`http://localhost:3001/api/product/${categoriesId}`, {
  // 		// headers: {
  // 		// 	Authorization: `Bearer ${token}`,
  // 		// },
  // 	});
  // }

  return (
    <div>
      <div>
        <div className="container min-vh-100 w-auto">
          <h2 className={`${adminCategory.admin} text-center`}>
            Gestion de Categorias
          </h2>
          <button className="btn btn-success">Agregar categoría</button>
          <div className="row px-0">
            <div className="col-md-3">
              <SiderAdmin />
            </div>
            <div className="col-md-9 ">
              <div
                className={`${tableStyles.font} pb-2 table-responsive-md `}
              >
                <Table striped bordered hover>
                  <thead>
                    <tr className="text-center ">
                      <th>Id</th>
                      <th>Categorias</th>
                      <th>Editar</th>
                      <th>Borrar</th>
                    </tr>
                  </thead>

                  <tbody>
                    {categories.map((category) => (
                      <tr className="text-center">
                        <td className="text-center">{category.id}</td>
                        <td>{category.name}</td>
                        <td>
                          <i className="fas fa-edit"></i>
                        </td>
                        <td>
                          <i
                            // onClick={() => {
                            //   setCategoriesId(categories.id);
                            //   handleDelete();
                            // }}
                            className="far fa-trash-alt btn btn-white"
                          ></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCategorys;
