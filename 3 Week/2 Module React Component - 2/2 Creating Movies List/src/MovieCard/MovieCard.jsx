// MovieCard.js
import React, { Component } from 'react';
import '../../src/App.css';

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: props.rating,
      favourite: props.favourite,
    }
    console.log(this.props);
  }

  // Method to increment rating
  incrementRating = () => {
    this.setState((prevState) => ({
      rating: prevState.rating < 5 ? prevState.rating + 1 : 5,
    }));
  };

  // Method to decrement rating
  decrementRating = () => {
    this.setState((prevState) => ({
      rating: prevState.rating > 0 ? prevState.rating - 1 : 0,
    }));
  };

  // Method to toggle favourite status
  toggleFavourite = () => {
    this.setState((prevState) => ({
      favourite: !prevState.favourite,
    }));
  };

  renderStars() {
    const stars = [];
    for (let i = 1; i <= this.state.rating; i++) {
      stars.push(
        <span key={i} className="star filled-star">
          <img
            src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
            alt="star"
            className="star-icon"
          />
        </span>
      );
    }

    if (stars.length === 0) {
      return <h3 className=" "> ☆No Rating</h3>;
    }

    return stars;
  }

  render() {
    const { poster, title, releaseDate } = this.props;
    const { rating, favourite } = this.state;

    return (
      <div className="movie-card" >
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
          <button
            onClick={this.toggleFavourite}
            className={`favourite-btn ${favourite ? 'favourited' : ''}`}
          >
            {favourite ? '★ Favorited' : '☆ Add to Favourites'}
          </button>
        </div>
      </div>
    );
  }
}

export default MovieCard;
