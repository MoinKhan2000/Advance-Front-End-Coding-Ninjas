// App.js
import "./styles.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Contact } from "./pages/Contact";
import { ItemDetails } from "./pages/ItemDetails";
import { NotFound } from "./pages/NotFound";
import { useState } from "react";
import PrivateRoute from "./pages/PrivateRoute";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Create a router with protected routes
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFound />,
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Home loggedIn={isLoggedIn} setLoggedin={setIsLoggedIn} />
        },
        {
          path: "/contact",
          element: (
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Contact />
            </PrivateRoute>
          )
        },
        {
          path: "/list",
          children: [
            {
              index: true,
              element: (
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <List />
                </PrivateRoute>
              )
            },
            {
              path: ":itemId",
              element: (
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <ItemDetails />
                </PrivateRoute>
              )
            }
          ]
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
