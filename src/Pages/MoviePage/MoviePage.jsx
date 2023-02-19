import React from "react";
import MoviePageSerch from "../../Component/MoviePageContanent/MoviePageSerch";
import MoviePageCard from "../../Component/MoviePageContanent/MoviePageCard";
import "../../Css/MoviePage/MoviePage.css";

function MoviePage() {
  return (
    <div>
      <MoviePageSerch />
      <MoviePageCard />
    </div>
  );
}

export default MoviePage;
