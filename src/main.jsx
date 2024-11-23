import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./rutes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Create, { createPostAction } from "./components/Create.jsx";
import Postlist, { postLoader } from "./components/Post_list.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Postlist />,
        loader: postLoader,
      },
      {
        path: "create-post",
        element: <Create />,
        action: createPostAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
