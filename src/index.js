import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import HomePage from "./Homepage/HomePage";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <HomePage/> */}
    <App />
  </StrictMode>
);