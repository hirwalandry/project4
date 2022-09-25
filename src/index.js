import React from "react";
import { createRoot } from "react-dom/client";
import { ContextProvider } from "./contexts/ContextProvider";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
