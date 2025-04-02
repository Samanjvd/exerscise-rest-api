import { useRoutes } from "react-router-dom";
import Router from "./Routes";

function App() {
  let router = useRoutes(Router);
  return <div>{router}</div>;
}

export default App;
