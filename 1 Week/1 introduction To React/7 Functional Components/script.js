// Button component: A functional component that renders a styled button.
// It accepts `text` and `bgColor` as props.
// `bgColor` has a default value of "red" if not provided.
const Button = ({ text, bgColor = "red" }) => {
  return (
    // Applying inline styles to the button.
    // `backgroundColor` is set from the `bgColor` prop.
    // Other styles include padding, margin, white text color, and no border.
    <button style={{ backgroundColor: bgColor, padding: "4px", margin: "4px", color: 'white', border: 'none' }}>
      {text} {/* Button text is rendered here using the `text` prop */}
    </button>
  );
};

// App component: The main functional component that renders the application UI.
// It includes a heading and multiple Button components.
const App = () => {
  return (
    <div>
      {/* Main heading for the application */}
      <h1>Welcome to the React App</h1>

      {/* Rendering Button components with different `text` and `bgColor` props */}
      {/* The `text` prop sets the button label, and `bgColor` sets the background color */}
      <Button text="Hey Click Me!" bgColor="purple" />
      <Button text="Post" bgColor="cyan" />
      <Button text="Like" bgColor="blue" />

      {/* This button uses the default `bgColor` of "red" since no `bgColor` prop is provided */}
      <Button text="Submit" />
    </div>
  );
}

// Rendering the App component into the DOM.
// `document.getElementById('root')` selects the root element where the App will be rendered.
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
