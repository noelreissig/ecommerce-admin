import logo from "./logo.svg";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import NoMatch from "./components/NoMatch";
import Admin from "./components/admin/Admin";
import AdminProductos from "./components/admin/AdminProductos";
import AdminCategorys from "./components/admin/AdminCategories/AdminCategorys";
import ClientUser from "./components/admin/ClientUsers/ClientUser";
import AdminUser from "./components/admin/AdminUsers/AdminUser";
import AdminEditCategory from "./components/admin/AdminCategories/AdminEditCategory";

import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          {/* <PrivateRoute exact path="/login" component={Login} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin" component={Admin} />
          <Route path="/admin/categorias" component={AdminCategorys} />
          <Route path="/admin/productos" component={AdminProductos} />
          <Route path="/admin/clients" component={ClientUser} />
          <Route path="/admin/users" component={AdminUser} />
<<<<<<< Updated upstream
          <Route
            path="/admin/categorias/editar"
            component={AdminEditCategory}
          />
=======
>>>>>>> Stashed changes
          <Route component={NoMatch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
