import React from "react";
import axios from "axios";
import MovieList from "./MovieList.component";
import WithSpinner from "../with-spinner/WithSpinner.component";

class MovieListContainer extends React.Component {
  constructor() {
    super();

    this.movie = WithSpinner(MovieList)
  }
  state = {
    movieList: [],
    available: false
  };
  componentDidMount() {
    console.log("did mount start running");
    axios(
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
    )
      .then(result =>
        this.setState({ movieList: result.data, available: true })
      )
      .catch(err => {
        this.setState({ available: false });
        console.log(err);
      });
  }
  render() {
    return this.movie({
      available: this.state.available,
      movieList: this.state.movieList
    });
  }
}

export default MovieListContainer;
