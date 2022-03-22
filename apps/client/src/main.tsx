import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./providers/app-provider";
import { GlobalErrorBoundary } from "./lib/react-error-boundary";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <GlobalErrorBoundary>
        <App />
      </GlobalErrorBoundary>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
