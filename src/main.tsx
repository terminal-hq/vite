/**
 * Entry point for the React application.
 *
 * This file sets up the React application by:
 * 1. Importing necessary dependencies and components
 * 2. Creating a root for the React application in the DOM element with id 'root'
 * 3. Rendering the App component wrapped in StrictMode
 *
 * @module main
 * @requires react
 * @requires react-dom/client
 * @requires ./index.css
 * @requires ./App.tsx
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
