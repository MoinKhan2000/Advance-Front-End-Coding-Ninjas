import React from "react";
import Image from "./Image";

export default class ImageList extends React.Component {
  // Prevent re-render if the new image URL is invalid (spaces or too short)
  shouldComponentUpdate(nextProps) {
    // Only update if the length of the new image URL is valid
    return nextProps.images.length !== this.props.images.length;
  }

  render() {
    return (
      <div className="image-list">
        {this.props.images.map((image, index) => (
          <Image key={index} image={image} />
        ))}
      </div>
    );
  }
}
