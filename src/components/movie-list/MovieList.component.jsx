import React from "react";
import MovieCard from "../movie-card/MovieCard.component";

class MovieList extends React.Component {
  stringFormat = (string) => (string.length > 50 ? string.slice(0, 100) : string);

  render() {
    const {movieList} = this.props;

    return (
      <div className="container">
        <h1 className="text-center my-3">Movie List</h1>
        <div className="row">
          {movieList.map(movie => (
            <MovieCard
              key={movie.maPhim}
              hinhAnh={movie.hinhAnh}
              tenPhim={movie.tenPhim}
              moTa={this.stringFormat(movie.moTa)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MovieList;
