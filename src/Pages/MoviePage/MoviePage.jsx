import React, { useState } from "react";
import MoviePageSerch from "../../Component/MoviePageContanent/MoviePageSerch";
import MoviePageCard from "../../Component/MoviePageContanent/MoviePageCard";
import "../../Css/MoviePage/MoviePage.css";

function MoviePage() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <MoviePageSerch setSearch={setSearch} />
      <MoviePageCard search={search} />
    </div>
  );
}

export default MoviePage;
