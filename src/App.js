import React from "react";
import HeaderHome from "./components/header/HeaderHome.component";
import MovieListContainer from "./components/movie-list/MovieList.container";

const App = () => (
  <div>
    <HeaderHome />
    <MovieListContainer />
  </div>
);

export default App;
// http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01