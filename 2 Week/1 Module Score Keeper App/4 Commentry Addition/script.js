let run = 0;
let wicket = 0;
let ballResult = [];
let commentries = [];  // Move commentries array outside the component

// Header Component
const Header = ({ title }) => <h1 className="text-center">{title}</h1>;

// ScoreBoard Component to show runs and wickets
const ScoreBoard = ({ run, wicket }) => (
  <h3 className="text-center">
    <span id="run-display">Current Run: {run}</span>
    <br />
    <span id="wicket-display">Current Wicket: {wicket}</span>
  </h3>
);

const BallResults = ({ ballResult }) => {
  return (
    <div className="text-center p-4">
      <div className="flex">
        {ballResult.map((elem, index) => (
          <div className="col" key={index}>
            <button className="ball">{index + 1}</button>
            <button
              className={`${typeof elem === "string" ? "wicket" : "run"}`}
              disabled
            >
              {elem}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const ShowButtons = ({ runArr, increaseRun, increaseWicket }) => {
  return (
    <div className="text-center p-4">
      {runArr.map((elem, index) => (
        <button key={index} onClick={() => increaseRun(elem)}>
          {elem}
        </button>
      ))}
      <br />
      <button onClick={increaseWicket}>Wicket</button>
    </div>
  );
};

const CommentryForm = ({ run }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCommentary = {
      run: run,
      comment: e.target.commentary.value,
    };
    e.target.commentary.value = "";
    commentries.unshift(newCommentary);
    updateDisplay();
  };

  return (
    <form className="commentary-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="ball">Ball:</label>
        <input type="text" id="ball" name="ball" value={run} disabled />
      </div>
      <div className="form-group">
        <label htmlFor="commentary">Commentary:</label>
        <input
          type="text"
          id="commentary"
          name="commentary"
          placeholder="Enter commentary"
        />
      </div>
      <input type="submit" value="Submit" className="submit-btn" />
      <AllCommentaries commentries={commentries} />
    </form>
  );
};

// Component to display all the commentaries
const AllCommentaries = ({ commentries }) => {
  return (
    <div className="commentary-container">
      {commentries.map((commentary, index) => (
        <div key={index} className="commentary-card m-4 p-4">
          <strong>Run : </strong>
          <span className="ball-number">{commentary.run}</span>
          &nbsp;&nbsp;&nbsp;
          <span className="commentary-text">
            <strong>Commentary:</strong> {commentary.comment}
          </span>
        </div>
      ))}
    </div>
  );
};


let tempRun = 0;
const ScoreKeeper = () => {
  const runArr = [1, 2, 3, 4, 5, 6];

  const increaseRun = (cnt) => {
    if (wicket >= 10) {
      alert("Game over!");
      tempRun = 0;
      resetGame();
      return;
    }

    run += cnt;
    tempRun = cnt;
    ballResult.push(cnt);
    updateDisplay();
  };

  const increaseWicket = () => {
    if (wicket < 10) {
      wicket += 1;
      tempRun = 'W'
      ballResult.push("W");
      updateDisplay();
    } else {
      alert("Game over!");
      tempRun = 0;
      resetGame();
    }
  };

  const resetGame = () => {
    run = 0;
    wicket = 0;
    ballResult = [];
    commentries = [];  // Reset the commentaries when game resets
    tempRun = 0;
    updateDisplay();
  };

  return (
    <div>
      <Header title="Welcome to the Score Keeper App" />
      <ScoreBoard run={run} wicket={wicket} />
      <BallResults ballResult={ballResult} /> <br />
      <ShowButtons runArr={runArr} increaseRun={increaseRun} increaseWicket={increaseWicket} />
      <CommentryForm run={tempRun} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const updateDisplay = () => {
  root.render(<ScoreKeeper />);
};

root.render(<ScoreKeeper />);
