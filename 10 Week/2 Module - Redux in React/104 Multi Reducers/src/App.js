import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './store'

// components imports
import { Navbar } from "./components/Navbar";

// pages imports
import { Home } from "./pages/Home";
import { Timer } from "./pages/Timer";
import { Counter } from "./pages/Counter";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "/timer", element: <Timer /> },
        { path: "/counter", element: <Counter /> }
      ]
    }
  ]);

  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}
