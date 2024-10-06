// MovieCard.js
import React, { Component } from 'react';
import '../../src/App.css';

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poster: 'https://lh4.googleusercontent.com/proxy/h97L2CEYXPcs4pY5mOGMvvwa5rtdxtcU8Q8FHENgubjSZk-_p4W7Ot6mZd31Yj29b-zssJwNjGqfGA09SHYAf1Hmi_U07-mQBERPhn6i0836ZIIWzZw66Q',
      title: 'The Godfather',
      rating: '9.2',
      releaseDate: '1972-03-24',
    };
  }

  render() {
    const { poster, title, rating, releaseDate } = this.state;

    return (
      <div className="movie-card">
        <img src={poster} alt={`${title} Poster`} className="movie-poster" />
        <div className="movie-info">
          <h3 className="movie-title">{title}</h3>
          <p className="movie-rating">Rating: {rating}</p>
          <p className="movie-release-date">Release Date: {releaseDate}</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
