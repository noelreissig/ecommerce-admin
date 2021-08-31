import Footer from "../Footer";
import NavComponent from "../Navbar";
import TableAdmin from "./TableAdmin";
import SiderAdmin from "./SiderAdmin";
import adminStyles from "./admin.module.css";

function AdminProductos() {
  return (
    <div>
      <NavComponent />
      <div className="container min-vh-100">
        <h2 className={`${adminStyles.admin} text-center`}>
          Gestion de Productos
        </h2>
        <div className="row px-0">
          <div className="col-md-3 w-auto ">
            <SiderAdmin />
          </div>
          <div className="col-md-9 text-center">
            <TableAdmin />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default AdminProductos;
