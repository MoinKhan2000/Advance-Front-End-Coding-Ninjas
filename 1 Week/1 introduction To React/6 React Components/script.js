// It is mandatory to capitalize component names in React so that React can differentiate between custom components and native HTML elements.
function App() {
  return (
    <div>
      <h1>Hello, World! This is App Component</h1>
    </div>
  );
}

// ReactDOM.createRoot(document.getElementById('root')).render(App()); 
// This would treat App as a normal JavaScript function call, not as a React component.

// Using the component syntax with JSX (self-closing tag) ensures that React treats `App` as a component.
// This also enables proper display in React Developer Tools.
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
