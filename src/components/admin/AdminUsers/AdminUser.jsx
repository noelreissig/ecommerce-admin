import React from "react";
import { Table } from "react-bootstrap";
import SiderAdmin from "../SiderAdmin";
import adminUser from "./adminUser.module.css";
import tableStyles from "../tableStyles.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
      <div className={adminUser.imgBackground}>
        <div className="container min-vh-100">
          <h2 className={`${adminUser.admin} text-center text-white`}>
            Administrador
          </h2>
          <Link to="/admin" className="text-decoration-none">
            <button className="btn btn-success d-block d-sm-none mx-auto mb-2 ">
              Volver a Menú
            </button>
          </Link>
          <div className="d-flex justify-content-center">
            <button className="btn btn-success mb-3 "> Agregar Admin</button>
          </div>
          <div className="row px-0">
            <div className="col-md-3 w-auto d-none d-lg-block">
              <SiderAdmin />
            </div>
            <div className="col-md-9 ">
              <div
                className={`${tableStyles.font} pb-2 table-responsive-md bg-white`}
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
                          <td className="text-center">{user.id}</td>
                          <td>{user.firstname}</td>
                          <td>{user.lastname}</td>
                          <td>{user.email}</td>
                          <td>
                            <i className="fas fa-edit text-success"></i>
                          </td>
                          <td>
                            <i
                              onClick={() => {
                                setUserId(user.id);
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

export default AdminUser;
