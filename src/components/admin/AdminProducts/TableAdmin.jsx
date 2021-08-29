import React from "react";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import tableStyles from "./tableStyles.module.css";
import ModalEditProduct from "./ModalEditProduct";
import axios from "axios";
import { useSelector } from "react-redux";

const TableAdmin = ({ products, setRefresh }) => {
  const { token } = useSelector((state) => state.authReducer);
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState({});
  const [productsList, setProductsList] = useState([]);

  const handleShow = () => {
    setShow(true);
  };

  async function handleStared(id, isStared) {
    const formData = new FormData();
    formData.append("stared", isStared);
    await axios({
      method: "patch",
      url: `http://localhost:3001/api/product/${id}`,
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setRefresh(true);
  }

  async function handleDelete(id) {
    await axios.delete(`http://localhost:3001/api/product/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setProductsList((products) =>
      products.filter((product) => product.id !== id)
    );
  }

  return (
    <div className={`${tableStyles.font} pb-2 table-responsive-md bg-white`}>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Id</th>
            <th>Nombre</th>
            <th>Categoria</th>
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
              <tr className="text-center" key={product.id}>
                <td>{product.id}</td>
                <td className="text-start">{product.name}</td>
                <td>{product.category.name}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <button
                    className="btn"
                    onClick={() => handleStared(product.id, !product.stared)}
                  >
                    {product.stared === false ? (
                      <i className="far fa-heart text-danger"></i>
                    ) : (
                      <i className="fas fa-heart text-danger"></i>
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
                      handleDelete(product.id);
                    }}
                    className="far fa-trash-alt btn btn-white text-danger"
                  ></i>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <ModalEditProduct
        key={product.id}
        product={product}
        show={show}
        setShow={setShow}
        setRefresh={setRefresh}
      />
    </div>
  );
};

export default TableAdmin;
