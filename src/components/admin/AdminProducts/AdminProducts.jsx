import Footer from "../../Footer";
import NavComponent from "../../Navbar";
import TableAdmin from "./TableAdmin";
import SiderAdmin from "../SiderAdmin";
import adminStyles from "./admin.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

function AdminProducts() {
  const { token } = useSelector((state) => state.authReducer);
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  // const [productId, setProductId] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(`http://localhost:3001/api/product`);
      setProducts(response.data);
      setRefresh(false);
    };
    getProducts();
  }, [refresh]);

  //para que cree un nuevo producto
  //dentro del handleCreate
  //llamada al back para .store
  //pasar todos los datos en la data

  return (
    <div>
      <NavComponent />
      <div className="container min-vh-100">
        <div className="row">
          <div className="col text-center">
            <h2 className={`${adminStyles.admin} mb-0`}>
              Gestion de Productos
            </h2>
            <button className="btn btn-success mb-2">Agregar Producto</button>
            <Link to="">
              <button className="btn btn-outline-success d-block d-sm-none mx-auto mb-2">
                Volver a Menu
              </button>
            </Link>
          </div>
        </div>
        <div className="row px-0">
          <div className="col-md-3 w-auto d-none d-lg-block">
            <SiderAdmin />
          </div>
          <div className="col-md-9 text-center">
            <TableAdmin products={products} setRefresh={setRefresh} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default AdminProducts;
