import {
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";
import "./styles/global.css";
import Layout from "./components/layout/Layout";

import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";
import ProductDetails from "./components/pages/ProductDetails";
import Payment from "./components/pages/Payment";
import Success from "./components/pages/Success";

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
        path: "/product",
        children: [
          {
            index: true,
            element: <ProductDetails />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "payment",
            children: [
              {
                index: true,
                element: <Payment />,
              },
              {
                path: "success",
                element: <Success />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div className="flex flex-col items-center">
      <RouterProvider router={router}>
        <ScrollRestoration />
        <RouterProvider router={router} />
      </RouterProvider>
    </div>
  );
}

export default App;
