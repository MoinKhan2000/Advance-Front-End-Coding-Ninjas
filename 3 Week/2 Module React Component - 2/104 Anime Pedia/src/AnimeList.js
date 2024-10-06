import { Component } from "react";
import AnimeCard from "./AnimeCard"; // Import the AnimeCard component

class AnimeList extends Component {
  render() {
    return (
      <div className="anime-list">
        {this.props.anime.map((anime, index) => (
          <AnimeCard key={index} name={anime.name} image={anime.image} />
        ))}
      </div>
    );
  }
}

export default AnimeList;
