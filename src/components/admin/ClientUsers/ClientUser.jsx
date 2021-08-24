import React from "react";
import Footer from "../../Footer";
import NavComponent from "../../Navbar";
import { Table } from "react-bootstrap";
import SiderAdmin from "../SiderAdmin";
import clientUser from "./clientUser.module.css";
import tableStyles from "../tableStyles.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

const ClientUser = () => {
  const { token } = useSelector((state) => state.authReducer);

  const [clients, setClients] = useState([]);
  const [clientId, setClientId] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(`http://localhost:3001/api/users`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setClients(response.data);
    };
    getUsers();
  }, []);

  async function handleDelete() {
    await axios.delete(`http://localhost:3001/api/users/${clientId}`, {
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
          <h2 className={`${clientUser.admin} text-center`}>
            Gestion de Clientes
          </h2>
          <button className="btn btn-outline-success d-block d-sm-none mx-auto mb-2">
            Volver a Menu
          </button>
          <div className="d-flex justify-content-center">
            <button className="btn btn-success mb-3 ">Agregar cliente</button>
          </div>
          <div className="row px-0">
            <div className="col-md-3 w-auto d-none d-lg-block">
              <SiderAdmin />
            </div>
            <div className="col-md-9">
              <div className={`${tableStyles.font} pb-2 table-responsive-md`}>
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
                          <td className="text-center">{client.id}</td>
                          <td>{client.firstname}</td>
                          <td>{client.lastname}</td>
                          <td>{client.phone}</td>
                          <td>{client.address}</td>
                          <td>
                            <i className="fas fa-edit"></i>
                          </td>
                          <td>
                            <i
                              onClick={() => {
                                setClientId(client.id);
                                handleDelete();
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

export default ClientUser;
