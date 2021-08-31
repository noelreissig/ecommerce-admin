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
									className={`${siderAdminStyles.iconos} fas fa-home ps-2 `}
								></i>
							</span>
						</Link>
					</div>
					<div
						className={`${siderAdminStyles.borderBox} ms-2 mb-3 p-1 rounded shadow border-white`}
					>
						<Link
							to="/admin/categorias"
							className={`${siderAdminStyles.Link}`}
						>
							<span className={`${siderAdminStyles.subtitulo} text-white `}>
								Categorias{" "}
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
								Ordenes
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

{
	/* <div className="container text-center mt-5">
      <h2 className="mb-5">Panel de control</h2>

      <div className="row d-flex justify-content-around">
        <div className={`col-md-3 ${homeAdminstyles.borderBox} rounded shadow`}>
          <Link to="/admin/categorias" className={homeAdminstyles.Link}>
            <h3 className={homeAdminstyles.subtitulo}>Categorias</h3>
            <hr />
            <i className="fas fa-layer-group fs-1 pb-4 mt-3"></i>
          </Link>
        </div>
        <div className={`col-md-3 ${homeAdminstyles.borderBox} rounded shadow`}>
          <Link to="/admin/productos" className={homeAdminstyles.Link}>
            <h3 className={homeAdminstyles.subtitulo}>Productos</h3>
            <hr />
            <i className="fas fa-tags fs-1 mt-3"></i>
          </Link>
        </div>
        <div className={`col-md-3 ${homeAdminstyles.borderBox} rounded shadow`}>
          <Link to="/admin/ordenes" className={homeAdminstyles.Link}>
            <h3 className={homeAdminstyles.subtitulo}>Ordenes</h3>
            <hr />
            <i className="fas fa-shopping-cart fs-1 mt-3"></i>
          </Link>
        </div>
        <div className="row mt-5 d-flex justify-content-around">
          <div
            className={`col-md-3 ${homeAdminstyles.borderBox} rounded shadow`}
          >
            <Link to="/admin/admin" className={homeAdminstyles.Link}>
              <h3 className={homeAdminstyles.subtitulo}>Admi</h3>
              <hr />
              <i className="fas fa-users-cog fs-1 mt-3 pb-4"></i>
            </Link>
          </div>
          <div
            className={`col-md-3 ${homeAdminstyles.borderBox} rounded shadow`}
          >
            <Link to="/admin/usuarios" className={homeAdminstyles.Link}>
              <h3 className={homeAdminstyles.subtitulo}>Usuarios</h3>
              <hr />
              <i className="fas fa-user fs-1 mt-3 pb-4"></i>
            </Link>
          </div>
        </div>
        <hr className="mt-5" />

        <div>
          <h4>Actividad de la tienda</h4>
        </div>
      </div>
    </div> */
}
