const ScoreKeeper = () => {
  const runArr = [1, 2, 3, 4, 5, 6];
  let run = 0;
  let wicket = 0;

  const updateDisplay = () => {
    document.getElementById('run-display').innerText = `Current Run: ${run}`;
    document.getElementById('wicket-display').innerText = `Current Wicket: ${wicket}`;
  };

  const increaseRun = (cnt) => {
    run += cnt;
    updateDisplay();
  };

  const increaseWicket = () => {
    wicket += 1;
    updateDisplay();
  };

  return (
    <div>
      <h1 className="text-center">
        Welcome to the Score Keeper App
      </h1>

      <h3 className="text-center">
        <span id="run-display">Current Run: 0</span>
        <br />
        <span id="wicket-display">Current Wicket: 0</span>
      </h3>

      <div className="text-center p-4 ">
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

ReactDOM.createRoot(document.getElementById('root')).render(<ScoreKeeper />);
