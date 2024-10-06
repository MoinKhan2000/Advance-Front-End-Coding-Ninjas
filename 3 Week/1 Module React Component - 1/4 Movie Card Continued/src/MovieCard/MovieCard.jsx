// MovieCard.js
import React, { Component } from 'react';
import '../../src/App.css'; // Assuming your CSS file is in this location

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poster: 'https://lh4.googleusercontent.com/proxy/h97L2CEYXPcs4pY5mOGMvvwa5rtdxtcU8Q8FHENgubjSZk-_p4W7Ot6mZd31Yj29b-zssJwNjGqfGA09SHYAf1Hmi_U07-mQBERPhn6i0836ZIIWzZw66Q',
      title: 'The Godfather',
      rating: 4, // Default star rating out of 5
      releaseDate: '1972-03-24',
    };
  }

  // Method to increment rating
  incrementRating = () => {
    this.setState((prevState) => ({
      rating: prevState.rating < 5 ? prevState.rating + 1 : 5, // Maximum rating is 5
    }));
  };

  // Method to decrement rating
  decrementRating = () => {
    this.setState((prevState) => ({
      rating: prevState.rating > 0 ? prevState.rating - 1 : 0, // Minimum rating is 0
    }));
  };

  renderStars() {
    const { rating } = this.state;
    const totalStars = 5; // Total stars possible
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "star filled-star" : "star"}>
          <img
            src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
            alt="star"
            className="star-icon"
          />
        </span>
      );
    }
    return stars;
  }

  render() {
    const { poster, title, rating, releaseDate } = this.state;

    return (
      <div className="movie-card">
        <img src={poster} alt={`${title} Poster`} className="movie-poster" />
        <div className="movie-info">
          <h3 className="movie-title">{title}</h3>
          <p className="movie-release-date">Release Date: {releaseDate}</p>
          <div className="movie-rating-container">
            <div className="star-rating">{this.renderStars()}</div>
            <p className="movie-rating">Rating: {rating}/5</p>
          </div>
          <div className="rating-controls">
            <button onClick={this.decrementRating} className="rating-btn">
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/minus.png"
                alt="decrement"
                className="icon-btn"
              />
            </button>
            <button onClick={this.incrementRating} className="rating-btn">
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/plus.png"
                alt="increment"
                className="icon-btn"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
