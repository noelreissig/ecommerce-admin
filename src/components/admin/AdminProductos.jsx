import Footer from "../Footer";
import NavComponent from "../Navbar";
import TableAdmin from "./TableAdmin";
import SiderAdmin from "./SiderAdmin";
import adminStyles from "./admin.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

function AdminProducts() {
  const { token } = useSelector((state) => state.authReducer);

  const [products, setProducts] = useState([]);
  // const [productId, setProductId] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(`http://localhost:3001/api/product`);
      setProducts(response.data);
    };
    getProducts();
  }, []);
  console.log(products);

  // async function handleDelete() {
  //   await axios.delete(`http://localhost:3001/api/products/${productId}`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  // }

  return (
    <div>
      <NavComponent />
      <div className="container min-vh-100">
        <div className="row ">
          <div className="col text-center ">
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
            <TableAdmin products={products} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default AdminProducts;
