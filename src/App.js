import logo from "./logo.svg";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import NoMatch from "./components/NoMatch";
import Admin from "./components/admin/Admin";
import AdminProductos from "./components/admin/AdminProductos";
import AdminCategorys from "./components/admin/AdminCategorys";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<Redirect to="/admin" />
					</Route>
					{/* <PrivateRoute exact path="/login" component={Login} /> */}
					<Route exact path="/admin" component={Admin} />
					<Route path="/admin/categorias" component={AdminCategorys} />
					<Route path="/admin/productos" component={AdminProductos} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
