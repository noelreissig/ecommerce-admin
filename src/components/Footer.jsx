import React from "react";
// import { a } from "react-router-dom";
import footerStyles from "./footer.module.css";

function Footer() {
  return (
    <div className={footerStyles.responsive}>
      <footer id="footer">
        <div className="container">
          <div className="row g-0 d-flex pt-4 text-center justify-content-center">
            <div className="col-md-3 ps-0">
              <div className="text-white">Categorías</div>
              <ul className="list-unstyled deco-list">
                <li>
                  <a href="#">Living</a>
                </li>
                <li>
                  <a href="#">Comedor</a>
                </li>
                <li>
                  <a href="#">Dormitorio</a>
                </li>{" "}
                <li>
                  <a href="#">Jardín</a>
                </li>{" "}
                <li>
                  <a href="#">Complementos</a>
                </li>
              </ul>
            </div>
            <div className={`col-md-3 pe-0 ${footerStyles.decoList}`}>
              <div className="text-white">Sobre Nosotros</div>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Quienes somos?</a>
                </li>
                <li>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#contact-modal"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <hr className="mt-4 text-white" />
            <span className="pb-4 text-white text-center">
              Deco-Hack. 2021 ®
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
