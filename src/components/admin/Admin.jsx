import React from "react";
import SiderAdmin from "./SiderAdmin";
import adminStyles from "./admin.module.css";

function Admin() {
  return (
    <div>
      <div className={`${adminStyles.imgBackground} overflow-auto`}>
        <div className="container min-vh-100">
          <h2 className={`${adminStyles.admin} text-center text-white`}>
            Administración Deco-Hack
          </h2>
          <div className={`${adminStyles.menuResponsive} row px-0 py-5`}>
            <div className="col-md-3 w-auto">
              <SiderAdmin />
            </div>
            <div class="col-sm-6 col-lg-3 ms-5 d-none d-lg-block">
              <div class="card border-0 text-white bg-primary">
                <div class="card-body">
                  <div class="text-value">132</div>
                  <div>Usuarios Registrados.</div>
                  <div class="progress progress-white progress-xs my-2">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="13.2"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>

                  <small class="text-white">
                    868 más para la próxima meta.
                  </small>
                </div>
              </div>
              <hr className="text-white" />
            </div>
            <div class="col-sm-6 col-lg-3 d-none d-lg-block">
              {" "}
              <div class="card border-0 text-white bg-success">
                <div class="card-body">
                  <div class="text-value">1031</div>

                  <div>Productos.</div>

                  <div class="progress progress-white progress-xs my-2">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>

                  <small class="text-white">Genial! No paren!</small>
                </div>
              </div>
              <hr className="text-white" />
            </div>
            <div class="col-sm-6 col-lg-3 d-none d-lg-block">
              <div class="card border-0 text-white bg-warning">
                <div class="card-body">
                  <div class="text-value">28 días</div>

                  <div>Ventas en el último mes.</div>

                  <div class="progress progress-white progress-xs my-2">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>

                  <small class="text-white">
                    Publica un artículo en 3-4 días.
                  </small>
                </div>
              </div>
              <hr className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
