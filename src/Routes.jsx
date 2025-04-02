import { Navigate } from "react-router-dom";
import Form from "./pages/form-login/Form";
import Users from "./pages/user-table/Users";

let Router = [
  { path: "/", element: <Navigate to="/login" replace /> },
  { path: "/login", element: <Form /> },
  { path: "/users", element: <Users /> },
];

export default Router;
