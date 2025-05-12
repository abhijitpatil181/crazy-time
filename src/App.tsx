import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Routes";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./apis/services";

const { VITE_SERVER_BASE_IP } = import.meta.env;
axios.defaults.baseURL = VITE_SERVER_BASE_IP;
console.log("VITE_SERVER_BASE_IP", VITE_SERVER_BASE_IP);

function App() {
  // useBlocks();
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Router />
          </QueryClientProvider>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
