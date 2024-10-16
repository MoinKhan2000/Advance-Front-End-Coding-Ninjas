import { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";

export default class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: props.movies,
      cartCount: props.cartCount,
      setCartCount: props.setCartCount,
      addedToCart: props.addedToCart,
    }
  }
  render() {
    return (
      <div className="movie-list">
        {
          this.state.movies.map((movie) => {
            return (
              // This is how we send the props to the child element. Props are always passed through the parent to the child element.
              <MovieCard cartCount={this.state.cartCount} setCartCount={this.state.setCartCount} poster={movie.poster} title={movie.title} rating={movie.rating} releaseDate={movie.releaseDate} favourite={movie.favourite} addedToCart={movie.addedToCart} />
            )
          })
        }
      </div>
    )
  }

}