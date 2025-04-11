import { useRoutes } from "react-router-dom";
import Router from "./Routes";
import Header from "./pages/Header";
import { useLocation } from "react-router-dom";

function App() {
  const router = useRoutes(Router);
  const location = useLocation();

  return (
    <div className="container mx-auto flex flex-col items-center">
      {location.pathname !== "/login" ? <Header /> : ""}
      {router}
    </div>
  );
}

export default App;
