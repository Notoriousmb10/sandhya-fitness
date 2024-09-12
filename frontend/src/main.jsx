import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  
    <GoogleOAuthProvider clientId="419295460459-dqatnr8sin1bme3vhiltfrscnqi9efjb.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
);
