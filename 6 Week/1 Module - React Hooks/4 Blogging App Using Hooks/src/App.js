import { useState } from "react";
import Blog from "./Components/Blog";
import BlogUsingReducer from "./Components/BlogUsingReducer";
import Login from "./User/Login";
import ForgetPassword from "./User/ForgetPassword";

function App() {
  const [form, setForm] = useState("login")
  return (
    <div>
      {/* <Blog /> */}
      {/* <BlogUsingReducer /> */}

      <h1>Welcome ! </h1>
      {
        form == "login" ? <Login /> : <ForgetPassword />
      }
      <button style={{ margin: "auto", display: "block", width: "fit-content" }} onClick={() => setForm(form == "login" ? "reset" : "login")}>
        {form == "login" ? "Forget Password" : "Back To Login"}
      </button>
    </div>
  );
}

export default App;
