import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css"; // Optional for global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Ensure your `index.html` has an element with id="root"
);
