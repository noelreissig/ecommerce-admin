import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

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
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-3">
          <form
            enctype="multipart/form-data"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <h3 className="text-white">Log in</h3>
            <label for="email" className="text-white form-label mb-2">
              Inster E-mail
            </label>
            <input
              type="email"
              className="mb-2 form-control"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label for="password" className="text-white form-label mb-2">
              Password (8 characters minimum):
            </label>
            <input
              type="password"
              className="form-control mb-4"
              id="pass"
              name="password"
              minlength="8"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input className="btn-register" type="submit" value="Log in" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
