import React from "react";
import {Switch, Route} from 'react-router-dom';

import WithHeader from "./components/header/WithHeader.component";
import MovieListContainer from "./components/movie-list/MovieList.container";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" render={() => WithHeader(MovieListContainer)}/>
      <Route exact path="/test" component={MovieListContainer}/>
    </Switch>
  </div>
);

export default App;
// http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01