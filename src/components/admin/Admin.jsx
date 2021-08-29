import React from "react";
import SiderAdmin from "./SiderAdmin";
import adminStyles from "./admin.module.css";

function Admin() {
  return (
    <div>
      <div className={adminStyles.imgBackground}>
        <div className="container min-vh-100">
          <h2 className={`${adminStyles.admin} text-center text-white`}>
            Administración Deco-Hack
          </h2>
          <div className="row px-0">
            <div className="col-md-3 w-auto ">
              <SiderAdmin />
            </div>
            <div className="col-md-9 d-flex justify-content-center">
              <img
                className="img-fluid d-none d-lg-block rounded"
                src="https://lasillarotarm.blob.core.windows.net/images/2019/06/20/terrorismo1-focus-0-0-983-557.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
