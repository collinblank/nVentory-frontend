import React from "react";
import ReactDOM from "react-dom/client";
import GlobalProvider from "./context/GlobalProvider";

import App from "./App";

import "./index.css";

const root: any = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
