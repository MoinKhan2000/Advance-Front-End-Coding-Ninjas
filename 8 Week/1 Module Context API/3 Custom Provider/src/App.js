import './App.css';
import Items from './components/Items';
import Navbar from './components/Navbar';
import { CustomItemProvider } from './context/itemContext';
function App() {
  return (
    <CustomItemProvider>
      <div className="App">
        <h2>Shopping Cart</h2>
        <Navbar />
        <Items />
      </div>
    </CustomItemProvider>
  );
}
export default App;
