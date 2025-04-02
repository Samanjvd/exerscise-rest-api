import PropTypes from "prop-types";
// import { isLogin } from "./Utils";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoutes({ children }) {
  let isAuthenticated = useLocation();
  console.log(isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/login" />;
}

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
