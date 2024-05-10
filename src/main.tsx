import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";
import { ThemeProvider } from "./contexts/theme-context";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App></App>
    </ThemeProvider>
  </React.StrictMode>
);
