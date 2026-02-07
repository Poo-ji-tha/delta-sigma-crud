/**
 * Entry Point: index.tsx
 *
 * Initializes and renders the React application.
 * Wraps the app in React's StrictMode for highlighting potential problems
 * and mounts the root App component to the DOM.
 *
 * Features:
 *  - Uses React 18's `createRoot` API for concurrent mode support.
 *  - Imports global CSS styles.
 *  - Renders the main <App /> component inside the root DOM element.
 *
 * Usage:
 *  - Ensure there is a <div id="root"></div> in your HTML file.
 *  - The App component is the root of the React component tree.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
