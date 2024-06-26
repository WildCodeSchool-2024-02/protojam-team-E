import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ActivitiesPage from "./pages/ActivitiesPage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import FilteredActivities from "./pages/FilteredActivities.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/About",
        element: <AboutPage />,
      },
      {
        path: "/Activities",
        element: <ActivitiesPage />,
      },
      {
        path: "/Activities/:id",
        element: <DetailPage />,
      },
      {
        path: "/Filter/:category",
        element: <FilteredActivities />,
      },
      {
        path: "/Contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <h1> Cette page n`existe pas! </h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
