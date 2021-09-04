import React from "react";
import { Link } from "react-router-dom";
import siderAdminStyles from "./SiderAdmin.module.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function SiderAdmin() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT_REQUEST" });
    history.push("/login");
  };
  return (
    <div className={`d-flex align-items-center`}>
      <div className="row">
        <div className="col-md-3 w-auto text-center">
          <div
            className={`${siderAdminStyles.borderBox} ms-2 mb-3 p-1 rounded shadow border-white`}
          >
            <Link to="/admin" className={`${siderAdminStyles.Link}`}>
              <span className={`${siderAdminStyles.subtitulo} text-white`}>
                Home
                <i
                  className={`${siderAdminStyles.iconos} fas fa-home ps-2`}
                ></i>
              </span>
            </Link>
          </div>
          <div
            className={`${siderAdminStyles.borderBox} ms-2 mb-3 p-1 rounded shadow border-white`}
          >
            <Link to="/admin/categorias" className={`${siderAdminStyles.Link}`}>
              <span className={`${siderAdminStyles.subtitulo} text-white`}>
                Categorías{" "}
                <i
                  className={`${siderAdminStyles.iconos} fas fa-layer-group ps-2`}
                ></i>
              </span>
            </Link>
          </div>
          <div
            className={`${siderAdminStyles.borderBox} ms-2 mb-3 p-1 rounded shadow border-white`}
          >
            <Link to="/admin/productos" className={siderAdminStyles.Link}>
              <span className={`${siderAdminStyles.subtitulo} text-white`}>
                Productos
                <i
                  className={`${siderAdminStyles.iconos} fas fa-tags ps-2`}
                ></i>
              </span>
            </Link>
          </div>
          <div
            className={`${siderAdminStyles.borderBox} ms-2 mb-3 p-1 rounded shadow border-white`}
          >
            <Link to="/admin/ordenes" className={siderAdminStyles.Link}>
              <span className={`${siderAdminStyles.subtitulo} text-white`}>
                Órdenes
                <i
                  className={`${siderAdminStyles.iconos} fas fa-shopping-cart ps-2`}
                ></i>
              </span>
            </Link>
          </div>
          <div
            className={`${siderAdminStyles.borderBox} ms-2 mb-3 p-1 rounded shadow border-white`}
          >
            <Link to="/admin/clients" className={siderAdminStyles.Link}>
              <span className={`${siderAdminStyles.subtitulo} text-white`}>
                Clientes
                <i
                  className={`${siderAdminStyles.iconos} fas fa-user ps-2`}
                ></i>
              </span>
            </Link>
          </div>
          <div
            className={`${siderAdminStyles.borderBox} ms-2 mb-3 p-1 rounded shadow border-white`}
          >
            <Link to="/admin/users" className={siderAdminStyles.Link}>
              <span className={`${siderAdminStyles.subtitulo} text-white`}>
                Admin
                <i
                  className={`${siderAdminStyles.iconos} fas fa-users-cog ps-2`}
                ></i>
              </span>
            </Link>
          </div>
          <div
            className={`${siderAdminStyles.borderBox} ms-2 mb-3 p-1 rounded shadow border-white`}
          >
            <Link
              to="/admin"
              className={siderAdminStyles.Link}
              onClick={() => handleLogout()}
            >
              <span className={`${siderAdminStyles.subtitulo} text-white`}>
                Logout
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiderAdmin;
