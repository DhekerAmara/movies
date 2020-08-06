import React, { useState } from "react";

import "./App.css";
import { moviesData } from "./components/data";
import MovieList from "./components/movieList";
import Add from "./components/addMovie";
import Filter from "./components/filter";
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [input, setInput] = useState("");
  const handleChange = (movie) => {
    setMovies([...movies, movie]);
  };
  const handleFilter = (input) => {
    setInput(input);
  };
  return (
    <div>
      <Filter handleFilter={handleFilter} />
      <MovieList movies={movies} input={input} />
      <Add handleAdd={handleChange} />
    </div>
  );
}

export default App;
