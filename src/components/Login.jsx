import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import loginStyles from "./login.module.css";

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:3001/api/tokenadmin",
      data: { email, password },
    }).then((response) => {
      dispatch({ type: "TOKEN_USER", payload: response.data.token });
      history.push("/admin");
    });
  };
  return (
    <div className={loginStyles.imgBackground}>
      <div
        className={`${loginStyles.loginFormContainer} container rounded bg-white mt-5 p-4`}
      >
        <div className="text-center">
          <h2 className={`${loginStyles.login}`}>
            Iniciar sesión en <br />
            Admin de Deco-Hack
          </h2>
        </div>
        <form
          enctype="multipart/form-data"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div>
            <label htmlFor="email" className="form-label mt-3">
              Email
            </label>
            <input
              type="email"
              className=" form-control"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label for="password" className="form-label mt-4">
              Contraseña (8 caracteres mínimo):
            </label>
            <input
              type="password"
              className="form-control mb-4"
              id="password"
              name="password"
              minlength="8"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="btn btn-outline-secondary mt-2 mb-2 rounded-lg w-100 btn-register"
            type="submit"
            value="Log in"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
