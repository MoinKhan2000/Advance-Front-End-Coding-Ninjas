import { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";

export default class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [
        {
          poster: 'https://m.media-amazon.com/images/M/MV5BMjM0YTg5OTctYjEyOC00ZmZhLWI3M2MtYmZjNTc0ZTRjNjI0XkEyXkFqcGc@._V1_.jpg',
          title: 'Oh My God 2',
          rating: 0,
          releaseDate: '1972-03-24',
          favourite: false,
        },
        {
          poster: 'https://m.media-amazon.com/images/M/MV5BMzhmY2E3MDctYjAzOS00ZmQyLTk2M2QtODg0MWU0Y2VjNWRkXkEyXkFqcGc@._V1_.jpg',
          title: 'The Godfather',
          rating: 0,
          releaseDate: '1972-03-24',
          favourite: false,
        },
        {
          poster: 'https://indiaglitz-media.s3.amazonaws.com/telugu/home/omg-review-4.jpg',
          title: 'Oh My God Telagu',
          rating: 0,
          releaseDate: '1972-03-24',
          favourite: false,
        },
      ]
    }
  }
  render() {
    return (
      <div className="movie-list">
        {
          this.state.movies.map((movie) => {
            return (
              // This is how we send the props to the child element. Props are always passed through the parent to the child element.
              <MovieCard poster={movie.poster} title={movie.title} rating={movie.rating} releaseDate={movie.releaseDate} favourite={movie.favourite} />
            )
          })
        }
      </div>
    )
  }

}