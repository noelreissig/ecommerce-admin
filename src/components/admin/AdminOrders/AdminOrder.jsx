import React from "react";
import { Table } from "react-bootstrap";
import SiderAdmin from "../SiderAdmin";
import adminOrder from "./adminOrder.module.css";
import tableStyles from "../tableStyles.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      <div className={adminOrder.imgBackground}>
        <div className="container min-vh-100">
          <h2 className={`${adminOrder.admin} text-center text-white`}>
            Gestión de órdenes
          </h2>
          <Link to="/admin" className="text-decoration-none">
            <button className="btn btn-success d-block d-lg-none mx-auto mb-2 ">
              Volver a Menú
            </button>
          </Link>

          <div className="row px-0">
            <div className="col-md-3 w-auto d-none d-lg-block">
              <SiderAdmin />
            </div>
            <div className="col-md-9 ">
              <div
                className={`${tableStyles.font} table-responsive-md bg-white`}
              >
                <Table striped bordered hover>
                  <thead>
                    <tr className="text-center ">
                      <th>Id</th>
                      <th>Fecha Compra</th>
                      <th>Fecha Entrega</th>
                      <th>Direccion</th>
                      <th>Cliente</th>
                      <th>Cant Items</th>
                      <th>Estado</th>
                      <th>Borrar</th>
                    </tr>
                  </thead>

                  <tbody>
                    {orders.map((order) => {
                      return (
                        <tr className="text-center">
                          <td className="text-center">{order.id}</td>
                          <td>
                            {moment(order.deliveryDate).format("MMM Do YY")}
                          </td>
                          <td>
                            {moment(order.createdAt)
                              .add(3, "days")
                              .format("MMM Do YY")}
                          </td>
                          <td>{order.deliveryAddress}</td>
                          <td>
                            {order.user.firstname} {order.user.lastname}
                          </td>
                          <td>
                            {order.products.reduce(
                              (acum, item) =>
                                acum + item.Order_Product.quantity,
                              0
                            )}
                          </td>
                          <td>
                            <select>
                              <option className="text-danger">Pendiente</option>
                              <option className="text-success">
                                En proceso
                              </option>
                              <option className="text-primary">
                                Entregado
                              </option>
                            </select>
                          </td>
                          <td>
                            <i
                              onClick={() => {
                                // setUserId(user.id);
                                handleDelete(order.id);
                              }}
                              className="far fa-trash-alt btn text-danger"
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

export default AdminOrder;
