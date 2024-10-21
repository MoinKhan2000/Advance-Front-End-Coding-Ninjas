import { useState } from "react";
import Blog from "./Components/Blog";
import BlogUsingReducer from "./Components/BlogUsingReducer";
import Login from "./User/Login";
import ForgetPassword from "./User/ForgetPassword";

function App() {
  const [form, setForm] = useState("login")
  return (
    <div>
      <Blog />
    </div>
  );
}

export default App;
