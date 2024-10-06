// MovieCard.js
import React, { Component } from 'react';
import '../../src/App.css';

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poster: 'https://lh4.googleusercontent.com/proxy/h97L2CEYXPcs4pY5mOGMvvwa5rtdxtcU8Q8FHENgubjSZk-_p4W7Ot6mZd31Yj29b-zssJwNjGqfGA09SHYAf1Hmi_U07-mQBERPhn6i0836ZIIWzZw66Q',
      title: 'The Godfather',
      rating: 0,
      releaseDate: '1972-03-24',
    };
  }

  // Method to increment rating
  incrementRating = () => {

    //  In React, you should not directly modify the state using this.state.rating += 1 or this.state.rating -= 1. State updates should always be done using the setState method to ensure React knows about the change and can re-render the component accordingly

    this.setState((prevState) => ({
      rating: prevState.rating < 5 ? prevState.rating + 1 : 5, // Ensure the maximum rating is 5
    }));
    this.setState((prevState) => ({
      rating: prevState.rating < 5 ? prevState.rating + 1 : 5, // Ensure the maximum rating is 5
    }));
    this.setState((prevState) => ({
      rating: prevState.rating < 5 ? prevState.rating + 1 : 5, // Ensure the maximum rating is 5
    }));
    this.setState((prevState) => ({
      rating: prevState.rating < 5 ? prevState.rating + 1 : 5, // Ensure the maximum rating is 5
    }));


  };

  // Method to decrement rating
  decrementRating = () => {

    // Set State is Asynchronous in nature
    this.setState((prevState) => ({
      rating: prevState.rating > 0 ? prevState.rating - 1 : 0, // Ensure the minimum rating is 0
    }, () => {
      // If we need to get the current status then in the callback we need to use the callback function
      console.log(`Current rating ${prevState.rating}`);
    }

    ));


  }

  renderStars() {
    const { rating } = this.state;
    const stars = [];

    for (let i = 1; i <= 5; i++) { // Show 5 stars even if not filled
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
