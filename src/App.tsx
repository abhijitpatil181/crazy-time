import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Routes";
import axios from "axios";

const { VITE_SERVER_BASE_IP } = import.meta.env;
axios.defaults.baseURL = VITE_SERVER_BASE_IP;
console.log("VITE_SERVER_BASE_IP", VITE_SERVER_BASE_IP);

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
