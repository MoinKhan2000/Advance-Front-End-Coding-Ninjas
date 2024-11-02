import { useContext } from "react";
import { languageContext } from "./languageContext";
import { themeContext } from "./themeContext";
export const Navbar = () => {
  // get theme and lanauge contexts here
  const { language, setLanguage } = useContext(languageContext)
  const { theme, setTheme, } = useContext(themeContext)
  const handleToggleTheme = () => {
    if (theme == "Light") {
      setTheme("Dark")
    } else {
      setTheme("Light")
    }
  }
  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        <button onClick={handleToggleTheme}> {theme == 'Light' ? "Dark" : "Light"} Theme</button>
        <span >{language}</span>
      </div>
    </div >
  );
};
