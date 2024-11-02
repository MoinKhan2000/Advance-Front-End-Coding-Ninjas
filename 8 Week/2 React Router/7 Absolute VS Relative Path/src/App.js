import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Items from "./pages/Items"

function App() {

  // Older Way 
  const router = createBrowserRouter([
    {
      path: "/root",
      element: <Navbar />,

      //? Using Absolute path
      // children: [
      //   { index: true, element: <Home /> },
      //   { path: "/root/about", element: <About /> },
      //   { path: "/root/items", element: <Items /> },
      // ]

      //? Using Relative path
      children: [
        { path: "", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "items", element: <Items /> },
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
