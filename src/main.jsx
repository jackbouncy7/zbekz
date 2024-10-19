import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.scss";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Import Font Awesome CSS
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import Bootstrap JS (with Popper.js included for tooltips, popovers, etc.)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
