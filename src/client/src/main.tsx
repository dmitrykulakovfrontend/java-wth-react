import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/error-page";
import Index from "./routes";
import Company from "./routes/company";
import Supplier from "./routes/company/[inn]/supplier";
import Customer from "./routes/company/[inn]/customer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: async () => {
      return { companies: [1, 2, 3] };
    },
    children: [
      { index: true, element: <Index /> },
      {
        path: "company/:inn",
        element: <Company />,
        loader: undefined,
        children: [
          {
            path: "supplier",
            element: <Supplier />,
          },
          {
            path: "customer",
            element: <Customer />,
          },
        ],
      },
    ],
  },
]);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

