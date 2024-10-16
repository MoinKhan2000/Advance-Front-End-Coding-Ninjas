import "./styles.css";
import { Component } from "react";
import Person from "./components/Person";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      network: [
        {
          id: 1,
          img:
            "https://res.cloudinary.com/dl26pbek4/image/upload/v1675071817/pexels-rodnae-productions-7348711_doe69b.jpg",
          email: "john@gmail.com",
          show: true
        },
        {
          id: 2,
          img:
            "https://res.cloudinary.com/dl26pbek4/image/upload/v1675071807/pexels-zaid-mohammed-15131063_bysy0s.jpg",
          email: "stephen@gmail.com",
          show: true
        },
        {
          id: 3,
          img:
            "https://res.cloudinary.com/dl26pbek4/image/upload/v1675071812/pexels-ali-kazal-14520051_qrdgym.jpg",
          email: "alex@gmail.com",
          show: true
        }
      ]
    };
  }

  // Function to remove a person from the network
  removePerson = (index) => {
    // Option 1: You can filter the person from the array to remove them completely
    this.setState((prevState) => {
      const updatedNetwork = [...prevState.network];
      updatedNetwork[index].show = false; // Hide the person from the list
      return { network: updatedNetwork };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>My Network</h1>
        <div className="list">
          {this.state.network.map(
            (p, i) =>
              p.show && ( // Only render the Person if show is true
                <Person
                  key={p.id}
                  person={p}
                  index={i}
                  removePerson={this.removePerson}
                />
              )
          )}
        </div>
      </div>
    );
  }
}

export default App;