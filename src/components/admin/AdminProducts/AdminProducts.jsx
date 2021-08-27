import Footer from "../../Footer";
import NavComponent from "../../Navbar";
import TableAdmin from "./TableAdmin";
import SiderAdmin from "../SiderAdmin";
import adminStyles from "./admin.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminCreateProduct from "./AdminCreateProduct";

function AdminProducts() {
  const { token } = useSelector((state) => state.authReducer);
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [product, setProduct] = useState({});
  const [newProduct, setNewProduct] = useState({});
  const [showCreate, setShowCreate] = useState(false);

  const handleShowCreate = () => {
    setShowCreate(true);
  };

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
              Gestión de Productos
            </h2>
            <button
              className="btn btn-success mb-2"
              onClick={() => {
                handleShowCreate();
                setNewProduct(newProduct);
                // console.log("entre al modal de producto nuevo");
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
            <Link to="">
              <button className="btn btn-outline-success d-block d-lg-none mx-auto mb-2">
                Volver a Menú
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
