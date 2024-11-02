import "./styles.css";
import { Navbar } from "./Navbar";
import { List } from "./List";
import { CustomPostProvider } from "./postContext";

export default function App() {
  return (
    <CustomPostProvider>
      <div className="App">
        <Navbar />
        <List />
      </div>
    </CustomPostProvider>
  );
}
