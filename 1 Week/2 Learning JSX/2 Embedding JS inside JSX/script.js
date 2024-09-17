const Button = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        margin: "10px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

const CounterDisplay = ({ counter }) => {
  return (
    <p
      id="counter"
      style={{
        fontSize: "20px",
        fontWeight: "bold",
        margin: "10px 0",
      }}
    >
      {counter}
    </p>
  );
};

const App = () => {
  let counter = 23;

  const updateCounter = () => {
    document.getElementById("counter").innerHTML = counter;
  };

  const handleDecrease = () => {
    counter--;
    updateCounter(); // Manually update the DOM element
  };

  const handleIncrease = () => {
    counter++;
    updateCounter(); // Manually update the DOM element
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello, World! I am a React App</h1>
      Counter value is <CounterDisplay counter={counter} />

      {/* Decrease Button */}
      <Button onClick={handleDecrease} text="Decrease" />

      {/* Increase Button */}
      <Button onClick={handleIncrease} text="Increase" />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
