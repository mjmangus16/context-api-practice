import React from "react";
import "./App.css";

import { MovieProvider } from "./MovieContext";
import AddMovie from "./components/AddMovie";

import MovieList from "./components/MovieList";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <MovieList />
        <AddMovie />
      </div>
    </MovieProvider>
  );
}

export default App;
