import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DishesProvider } from "./contexts/dishesContext/dishesContext";
import { UserProvider } from "./contexts/userContext/userContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <DishesProvider>
          <App />
        </DishesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
