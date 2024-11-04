import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"; // Ensure this is correctly defined
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
// import CartPage from "./pages/CartPage/CartPage"; // Ensure this is correctly defined
import OrdersPage from "./pages/OrdersPage/OrdersPage"; // Ensure this is correctly defined
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"; // Ensure this is correctly defined

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signup",
    element: <RegisterPage />,
  },
  {
    path: "/signin",
    element: <LoginPage />,
  },
  // {
  //   path: "/cart",
  //   element: <CartPage />,
  // },
  {
    path: "/myorders",
    element: <OrdersPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />, // Catch-all route for undefined paths
  },
]);

export default router;
