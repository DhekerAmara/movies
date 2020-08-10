import React, { useState } from "react";

import "./App.css";
import { moviesData } from "./components/data";
import MovieList from "./components/movieList";
import Add from "./components/addMovie";
import Filter from "./components/filter";
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [input, setInput] = useState("");
  const [star, setStar] = useState(0)
  const handleChange = (movie) => {
    setMovies([...movies, movie]);
  };
  const handleFilter = (input) => {
    setInput(input);
  };
  const handleStar = (star) => {
  setStar(star)
}
  return (
    <div>
      <Filter handleFilter={handleFilter} handleStar={handleStar} />
     
      <MovieList movies={movies} input={input}  star={star}/>
      <Add handleAdd={handleChange} />
    </div>
  );
}

export default App;
