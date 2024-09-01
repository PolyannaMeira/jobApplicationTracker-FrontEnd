import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipesPage from "./RecipesPage.jsx";
import Navigation from "./components/NavBar.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <Error /> },
  { path: "/recipes", element: <RecipesPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navigation />
    <RouterProvider router={router} />
  </StrictMode>
);
