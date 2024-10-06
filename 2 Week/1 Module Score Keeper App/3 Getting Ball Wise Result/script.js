
let run = 0;
let wicket = 0;
let ballResult = [];


// Header Component
const Header = ({ title }) => (
  <h1 className="text-center">{title}</h1>
);


// ScoreBoard Component to show runs and wickets
const ScoreBoard = ({ run, wicket }) => (
  <h3 className="text-center">
    <span id="run-display">Current Run: {run}</span>
    <br />
    <span id="wicket-display">Current Wicket: {wicket}</span>
  </h3>
);

const BallResults = ({ ballResult }) => {
  return (<div className="text-center p-4">
    <div className="flex">
      {ballResult.map((elem, index) => (
        <div className="col" key={index}>
          <button className="ball">{index + 1}</button>
          <button className={`${typeof elem === 'string' ? 'wicket' : 'run'}`} disabled>
            {elem}
          </button>
        </div>
      ))}
    </div>
  </div>)
}

const ShowButtons = ({ runArr, increaseRun, increaseWicket }) => {
  return (<div className="text-center p-4">
    {runArr.map((elem, index) => (
      <button key={index} onClick={() => increaseRun(elem)}>
        {elem}
      </button>
    ))}
    <br />
    <button onClick={increaseWicket}>Wicket</button>
  </div>)
}

const ScoreKeeper = () => {
  const runArr = [1, 2, 3, 4, 5, 6];

  const increaseRun = (cnt) => {
    if (wicket >= 10) {
      alert("Game over!");
      resetGame();
      return;
    }

    run += cnt;
    ballResult.push(cnt);
    updateDisplay();
  };

  const increaseWicket = () => {
    if (wicket < 10) {
      wicket += 1;
      ballResult.push('W');
      updateDisplay();
    } else {
      alert("Game over!");
      resetGame();
    }
  };

  const resetGame = () => {
    run = 0;
    wicket = 0;
    ballResult = [];
    updateDisplay();
  };

  return (
    <div>

      <Header title="Welcome to the Score Keeper App" />
      <ScoreBoard run={run} wicket={wicket} />
      <BallResults ballResult={ballResult} /> <br />
      <ShowButtons runArr={runArr} increaseRun={increaseRun} increaseWicket={increaseWicket} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

const updateDisplay = () => {
  root.render(<ScoreKeeper />);
};

root.render(<ScoreKeeper />);
