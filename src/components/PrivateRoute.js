import { useSelector } from "react-redux";
import React from "react";
import { Route, Redirect } from "react-router-dom";

// export default PrivateRoute;
// import { isLogin } from '../utils';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const auth = useSelector((state) => state.authReducer);
	return (
		<Route
			{...rest}
			render={(props) =>
				auth.token ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	);
};

export default PrivateRoute;
