import React from "react";
import Footer from "../Footer";
import NavComponent from "../Navbar";
import { Table } from "react-bootstrap";
import SiderAdmin from "./SiderAdmin";
import adminCategorys from "./adminCategorys.module.css";
import tableStyles from "./tableStyles.module.css";

function AdminCategorys() {
  return (
    <div>
      <div>
        <NavComponent />
        <div className="container min-vh-100">
          <h2 className={`${adminCategorys.admin} text-center`}>
            Gestion de Categorias
          </h2>
          <div className="row px-0">
            <div className="col-md-3 w-auto ">
              <SiderAdmin />
            </div>
            <div className="col-md-9 ">
              <div className={`${tableStyles.font} pb-2 table-responsive-md`}>
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
                    <tr className="text-center">
                      <td className="text-center">1</td>
                      <td>Comedor</td>
                      <td>
                        <i class="fas fa-edit"></i>
                      </td>
                      <td>
                        <i class="far fa-trash-alt btn btn-white"></i>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="text-center">2</td>
                      <td>Living</td>
                      <td>
                        <i class="fas fa-edit"></i>
                      </td>
                      <td>
                        <i class="far fa-trash-alt btn btn-white"></i>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="text-center">3</td>
                      <td>Dormitorio</td>
                      <td>
                        <i class="fas fa-edit"></i>
                      </td>
                      <td>
                        <i class="far fa-trash-alt btn btn-white"></i>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="text-center">4</td>
                      <td>Jardin</td>
                      <td>
                        <i class="fas fa-edit"></i>
                      </td>
                      <td>
                        <i class="far fa-trash-alt btn btn-white"></i>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="text-center">5</td>
                      <td>Complementos</td>
                      <td>
                        <i class="fas fa-edit"></i>
                      </td>
                      <td>
                        <i class="far fa-trash-alt btn btn-white"></i>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <button className="btn btn-success ">Agregar categoría</button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default AdminCategorys;
