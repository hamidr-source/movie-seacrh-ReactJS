import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NotificationsProvider } from "@toolpad/core/useNotifications";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NotificationsProvider>
    <App />
  </NotificationsProvider>
);
