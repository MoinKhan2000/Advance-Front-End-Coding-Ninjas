import "./styles.css";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { languageContext } from "./languageContext";
import { themeContext } from "./themeContext";

export default function App() {
  const [theme, setTheme] = useState("Light");
  const [language, setLanguage] = useState("English");

  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      <themeContext.Provider value={{ theme, setTheme }}>
        <div className={`App ${theme === "Dark" ? "dark" : ""}`}>
          <Navbar />
          <Home />
        </div>
      </themeContext.Provider>
    </languageContext.Provider>
  );
}
