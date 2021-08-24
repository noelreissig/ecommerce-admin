import React from "react";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import tableStyles from "./tableStyles.module.css";

const TableAdmin = ({ products }) => {
  return (
    <div className={`${tableStyles.font} pb-2 table-responsive-md`}>
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
          {products.map((product) => (
            <tr className="text-center">
              <td>{product.id}</td>
              <td className="text-left">{product.name}</td>
              <td>{product.categoryId}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                {product.stared ? (
                  <i className="fas fa-star"></i>
                ) : (
                  <i className="far fa-star"></i>
                )}
              </td>
              <td>
                <i className="fas fa-edit"></i>
              </td>
              <td>
                <i className="far fa-trash-alt btn btn-white"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableAdmin;
