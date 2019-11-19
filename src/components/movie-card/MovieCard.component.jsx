import React from "react";

const MovieCard = ({ tenPhim, moTa, hinhAnh }) => (
  <div className="card col-4">
    <img className="card-img-top" src={hinhAnh} alt="" width={280} height={420} />
    <div className="card-body">
      <h4 className="card-title">{tenPhim}</h4>
      <p className="card-text">{moTa}</p>
    </div>
  </div>
);

export default MovieCard;
