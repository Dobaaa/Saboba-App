import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import AdminContextProvider from "./context/AdminContext.jsx";
import WorkerContextProvider from "./context/WorkerContext.jsx";
import AppContextProvider from "./context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <AdminContextProvider>
      <WorkerContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </WorkerContextProvider>
    </AdminContextProvider>
  </Router>
);
