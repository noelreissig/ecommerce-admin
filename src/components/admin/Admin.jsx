import React from "react";
import SiderAdmin from "./SiderAdmin";
import Footer from "../Footer";
import adminStyles from "./admin.module.css";
import NavComponent from "../Navbar";

function Admin() {
  return (
    <div className="">
      <NavComponent />
      <div className="container min-vh-100">
        <h2 className={`${adminStyles.admin} text-center`}>
          Ganancias en Deco-Hack
        </h2>
        <div className="row px-0">
          <div className="col-md-3 w-auto ">
            <SiderAdmin />
          </div>
          <div className="col-md-9 d-flex justify-content-center">
            <img className="img-fluid" src="img\dashboard.png" alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Admin;
