import "./styles.css";
import { useState } from "react";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Contact } from "./pages/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const [page, setPage] = useState("home");
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/list", element: <List /> },
    { path: "/contact", element: <Contact /> },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
