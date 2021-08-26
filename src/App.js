import logo from "./logo.svg";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import NoMatch from "./components/NoMatch";
import Admin from "./components/admin/Admin";
import AdminProducts from "./components/admin/AdminProducts/AdminProducts";
import AdminCategorys from "./components/admin/AdminCategories/AdminCategorys";
import ClientUser from "./components/admin/ClientUsers/ClientUser";
import AdminUser from "./components/admin/AdminUsers/AdminUser";
import AdminEditCategory from "./components/admin/AdminCategories/AdminEditCategory";

import Login from "./components/Login";
import AdminOrder from "./components/admin/AdminOrders/AdminOrder";

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
					<Route path="/admin/productos" component={AdminProducts} />
					<Route path="/admin/ordenes" component={AdminOrder} />
					<Route path="/admin/clients" component={ClientUser} />
					<Route path="/admin/users" component={AdminUser} />
					<Route
						path="/admin/categorias/editar"
						component={AdminEditCategory}
					/>
					<Route component={NoMatch} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
