import TableAdmin from "./TableAdmin";
import SiderAdmin from "../SiderAdmin";
import adminStyles from "./admin.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminCreateProduct from "./AdminCreateProduct";
import ToastProducto from "../../ToastProducto/ToastProducto";

function AdminProducts() {
  const { token } = useSelector((state) => state.authReducer);
  const [products, setProducts] = useState([]);
  const [showOk, setShowOk] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [product, setProduct] = useState({});
  const [newProduct, setNewProduct] = useState({});
  const [showCreate, setShowCreate] = useState(false);

  const handleShowCreate = () => {
    setShowCreate(true);
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/product`
      );
      setProducts(response.data);
      setRefresh(false);
    };
    getProducts();
  }, [refresh]);

  return (
    <div className={`${adminStyles.imgBackground}`}>
      <div className="container min-vh-100">
        <div className="row">
          <div className="col text-center">
            <h2 className={`${adminStyles.admin} text-center text-white`}>
              Gestión de Productos
            </h2>
            <Link to="/admin" className="text-decoration-none">
              <button className="btn btn-success d-block d-lg-none mx-auto mb-2 ">
                Volver a Menú
              </button>
            </Link>
            <button
              className="btn btn-success mb-3"
              onClick={() => {
                handleShowCreate();
                setNewProduct(newProduct);
              }}
            >
              Agregar Producto
            </button>
            <AdminCreateProduct
              newProduct={newProduct}
              showCreate={showCreate}
              setShowCreate={setShowCreate}
              setRefresh={setRefresh}
              key={products.id}
            />
          </div>
        </div>
        <div className="row px-0">
          <div className="col-md-3 w-auto d-none d-lg-block">
            <SiderAdmin />
          </div>
          <div className="col-md-9 text-center">
            <TableAdmin
              products={products}
              setRefresh={setRefresh}
              showOk={showOk}
              setShowOk={setShowOk}
            />
            <ToastProducto show={showOk} setShow={setShowOk} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminProducts;
