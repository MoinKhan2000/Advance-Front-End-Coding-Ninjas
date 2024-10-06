let run = 0;
let wicket = 0;

const ScoreKeeper = () => {
  const runArr = [1, 2, 3, 4, 5, 6];

  const increaseRun = (cnt) => {
    run += cnt;
    updateDisplay();
  };

  const increaseWicket = () => {
    if (wicket < 10) {
      wicket += 1;
      updateDisplay();
    }
    else {
      alert("Game over!");
      run = 0;
      wicket = 0;
      updateDisplay()
    }
  };

  return (
    <div>
      <h1 className="text-center">
        Welcome to the Score Keeper App
      </h1>

      <h3 className="text-center">
        <span id="run-display">Current Run: {run}</span>
        <br />
        <span id="wicket-display">Current Wicket: {wicket}</span>
      </h3>

      <div className="text-center p-4">
        {runArr.map((elem, index) => (
          <button key={index} onClick={() => increaseRun(elem)}>
            {elem}
          </button>
        ))}
        <br />
        <button onClick={increaseWicket}>Wicket</button>
      </div>
    </div>
  );
};

// Rendering the component
let root = ReactDOM.createRoot(document.getElementById('root'));

// Function to re-render the updated component
const updateDisplay = () => {
  root.render(<ScoreKeeper />);
};

// Initial render
root.render(<ScoreKeeper />);
