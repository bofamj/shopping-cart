import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { dataProvider } from "./context/DataContext";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <dataProvider>
        <App />
      </dataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
