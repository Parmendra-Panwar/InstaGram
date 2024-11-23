import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./rutes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Create from "./components/Create.jsx";
import Postlist from "./components/Post_list.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Postlist />,
      },
      {
        path: "create-post",
        element: <Create />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
