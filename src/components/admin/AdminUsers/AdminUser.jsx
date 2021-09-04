import React from "react";
import { Table } from "react-bootstrap";
import SiderAdmin from "../SiderAdmin";
import adminUser from "./adminUser.module.css";
import tableStyles from "../tableStyles.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ToastProducto from "../../ToastProducto/ToastProducto";
import AdminEditUser from "./AdminEditUser";
import AdminCreateUser from "./AdminCreateUser";
const AdminUser = () => {
  const { token } = useSelector((state) => state.authReducer);
  const [refresh, setRefresh] = useState(false);
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);

  const [show, setShow] = useState(false);
  const [showOk, setShowOk] = useState(false);

  const [newUser, setNewUser] = useState({});
  const [showCreate, setShowCreate] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/admin`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      setUsers(response.data);
    };
    getUsers();
    setRefresh(false);
  }, [refresh]);

  const handleShow = () => {
    setShow(true);
  };
  const handleShowCreate = () => {
    setShowCreate(true);
  };

  async function handleDelete(id) {
    await axios.delete(`${process.env.REACT_APP_API_URL}/api/admin/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setRefresh(true);
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
            <button
              className="btn btn-success mb-3 "
              onClick={() => {
                handleShowCreate();
                setNewUser(newUser);
              }}
            >
              Agregar Admin
            </button>
            <AdminCreateUser
              showCreate={showCreate}
              setShowCreate={setShowCreate}
              setRefresh={setRefresh}
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
                            <i
                              className="fas fa-edit text-success"
                              onClick={() => {
                                handleShow();
                                setUser(user);
                              }}
                            ></i>
                          </td>
                          <td>
                            <i
                              onClick={() => {
                                handleDelete(user.id);
                              }}
                              className="far fa-trash-alt btn btn-white text-danger"
                            ></i>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <AdminEditUser
                    user={user}
                    show={show}
                    setShow={setShow}
                    setRefresh={setRefresh}
                    key={user.id}
                    showOk={showOk}
                    setShowOk={setShowOk}
                  />
                </Table>
                <ToastProducto show={showOk} setShow={setShowOk} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUser;
