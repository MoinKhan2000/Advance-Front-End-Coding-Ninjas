import React from "react";
import ImageList from "./components/ImageList";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],    // This will hold the images from local storage
      imageUrl: ""   // This is the input value for the new image URL
    };
  }

  // Event handler to set the image URL entered by the userk
  setImageUrl = (e) => {
    this.setState({ imageUrl: e.target.value });
  };

  // Function to add the image to local storage
  addImageToLS = () => {
    localStorage.setItem(
      "images",
      JSON.stringify([...this.state.images, this.state.imageUrl])
    );
  };

  // Function to get images from local storage
  getImagesFromLS = () => {
    const images = localStorage.getItem("images");
    if (!images) {
      return [];
    }
    return JSON.parse(images);
  };

  // Function to add a new image URL
  onAddImage = (e) => {
    e.preventDefault();
    const { imageUrl } = this.state;

    // Validation: URL must have no spaces and should have at least 5 characters
    if (imageUrl.trim().length >= 5 && !imageUrl.includes(" ")) {
      this.addImageToLS();
      this.setState((prevState) => ({
        images: [...prevState.images, imageUrl],
        imageUrl: "" // Reset the input field
      }));
    }
  };

  // Lifecycle method: Load images from local storage when the component is mounted
  componentDidMount() {
    const imagesFromStorage = this.getImagesFromLS();
    this.setState({ images: imagesFromStorage });
  }

  render() {
    return (
      <>
        <form onSubmit={this.onAddImage}>
          <input
            type="text"
            placeholder="Image URL"
            value={this.state.imageUrl}
            onChange={this.setImageUrl}
          />
          <button type="submit">Add Image</button>
        </form>
        <ImageList images={this.state.images} />
      </>
    );
  }
}
