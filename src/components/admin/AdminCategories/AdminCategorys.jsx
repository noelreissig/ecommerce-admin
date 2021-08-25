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

function AdminCategorys() {
  const { token } = useSelector((state) => state.authReducer);
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [category, setCategory] = useState({});

  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        method: "get",
        url: `http://localhost:3001/api/category`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(response.data);
      setRefresh(false);
    };
    getCategories();
  }, [refresh]);

  async function handleDelete(id) {
    await axios.delete(`http://localhost:3001/api/category/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setCategories((categories) =>
      categories.filter((category) => category.id !== id)
    );
  }

  return (
    <div>
      <div>
        <div className="container min-vh-100 w-auto">
          <h2 className={`${adminCategory.admin} text-center`}>
            Gestion de Categorias
          </h2>
          <button className="btn btn-outline-success d-block d-sm-none mx-auto mb-2">
            Volver a Menu
          </button>
          <div className="d-flex justify-content-center">
            <button className="btn btn-success mb-3 ">Agregar categoría</button>
          </div>

          <div className="row px-0">
            <div className="col-md-3 w-auto d-none d-lg-block">
              <SiderAdmin />
            </div>
            <div className="col-md-9">
              <div className={`${tableStyles.font} pb-2 table-responsive-md `}>
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
                        <td className="text-center">{category.id}</td>
                        <td>{category.name}</td>
                        <td>
                          <i
                            onClick={() => {
                              handleShow();
                              setCategory(category);
                              console.log("Soy el click", category.name);
                            }}
                            className="fas fa-edit"
                          ></i>
                        </td>
                        <td>
                          <button className="btn">
                            <i
                              onClick={() => {
                                handleDelete(category.id);
                              }}
                              className="far fa-trash-alt btn btn-white"
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
                    />
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
