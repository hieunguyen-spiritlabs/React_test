import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import WithHeader from "./components/header/WithHeader.component";
import MovieListContainer from "./components/movie-list/MovieList.container";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" render={() => WithHeader(MovieListContainer)} />
      <Route
        exact
        path="/test"
        render={() =>
          WithHeader(MovieListContainer, () => (
            <Link to="/">Back to With Header Page</Link>
          ))
        }
      />
    </Switch>
  </div>
);

export default App;
// http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01
