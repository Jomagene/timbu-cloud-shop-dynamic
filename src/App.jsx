import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/global.css";
import Layout from "./components/layout/Layout";

import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="flex flex-col items-center">
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
