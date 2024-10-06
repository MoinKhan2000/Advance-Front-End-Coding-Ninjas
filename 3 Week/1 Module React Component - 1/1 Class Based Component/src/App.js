import React from "react";

// function App() {
//   return (
//     <div className="App">
//       {/* Write the message here. */}
//       Welcome to React Course on CodingNinjas.com
//       <h1> I am a functinaol component</h1>
//     </div>
//   );
// }

// export default App;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Write the message here. */}
        Welcome to React Course on CodingNinjas.com
        <h1>I am a class based component</h1>
      </div>
    )
  }
}
export default App;