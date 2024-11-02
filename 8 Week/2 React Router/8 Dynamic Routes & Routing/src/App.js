// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Items from "./pages/Items"
import ItemDetails from "./pages/ItemDetails";

function App() {

  // Older Way 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { path: "", element: <Home /> },
        { path: "about", element: <About /> },
        {
          path: "items",
          children: [
            { index: true, element: <Items /> },
            { path: ":itemId", element: <ItemDetails /> }
          ]
        },
      ]
    },
  ]);

  // let routes = createRoutesFromElements(
  //   <>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/about" element={<About />} />
  //     <Route path="/items" element={<Items />} />
  //   </>
  // )

  // let router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
