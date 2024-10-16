import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: false
    };
  }

  // Use the required lifecycle methods here
  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((data) => this.setState({ photos: data, loading: false }))
      .catch((error) => console.error("Error fetching data:", error));
  }

  // Implement the componentWillUnmount lifecycle method here
  componentWillUnmount() {
    console.log("Component unmounted");
  }

  // Implement the getSnapshotBeforeUpdate lifecycle method here
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Return a snapshot value if needed, or return null
    console.log("Snapshot before update");
    return null;
  }

  // Now render method is outside the lifecycle methods
  render() {
    const { photos, loading } = this.state;

    return (
      <div className="App">
        {loading ? (
          <p>Loading photos...</p>
        ) : (
          photos.map((photo) => {
            return <Image key={photo.id} photo={photo} />;
          })
        )}
      </div>
    );
  }
}
