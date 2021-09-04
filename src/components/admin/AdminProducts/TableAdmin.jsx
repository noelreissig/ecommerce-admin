import React from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import tableStyles from "./tableStyles.module.css";
import ModalEditProduct from "./ModalEditProduct";
import axios from "axios";
import { useSelector } from "react-redux";
import ConfirmDelete from "../../ConfirmDelete/ConfirmDelete";

const TableAdmin = ({ products, setRefresh, showOk, setShowOk }) => {
  const { token } = useSelector((state) => state.authReducer);
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [product, setProduct] = useState({});

  const handleShow = () => {
    setShow(true);
  };

  const handleShowConfirmDelete = () => {
    setShowDelete(true);
  };

  async function handleStared(id, isStared) {
    const formData = new FormData();
    formData.append("stared", isStared);
    await axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}/api/product/${id}`,
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setRefresh(true);
  }

  return (
    <div className={`${tableStyles.font}  table-responsive-md bg-white`}>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Id</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Destacado</th>
            <th>Editar</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => (
              <tr className="text-center align-center" key={product.id}>
                <td>{product.id}</td>
                <td className="text-start">{product.name}</td>
                <td>{product.category.name}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <button
                    className="btn m-0 p-0"
                    onClick={() => handleStared(product.id, !product.stared)}
                  >
                    {product.stared === false ? (
                      <i className="far fa-star text-primary"></i>
                    ) : (
                      <i className="fas fa-star text-primary"></i>
                    )}
                  </button>
                </td>
                <td>
                  <i
                    className="fas fa-edit text-success"
                    onClick={() => {
                      handleShow();
                      setProduct(product);
                    }}
                  ></i>
                </td>
                <td>
                  <i
                    onClick={() => {
                      handleShowConfirmDelete();
                      setProduct(product);
                    }}
                    className="far fa-trash-alt btn text-danger"
                  ></i>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <ConfirmDelete
        key={product.id}
        showDelete={showDelete}
        setShowDelete={setShowDelete}
        setRefresh={setRefresh}
        product={product}
      />
      <ModalEditProduct
        key={product.id}
        product={product}
        show={show}
        setShow={setShow}
        showOk={showOk}
        setShowOk={setShowOk}
        setRefresh={setRefresh}
      />
    </div>
  );
};

export default TableAdmin;
