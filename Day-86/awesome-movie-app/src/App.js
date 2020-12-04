import React, { useEffect, useState } from 'react';

import './App.css';

import Movie from './components/Movie';

function App() {

  const [ movies, setMovies ] = useState([]);

  const getMovie = async () => {
    const movies = await fetch(process.env.REACT_APP_MOVIE_LIST);
      const movieJSON = await movies.json();
      console.log(movieJSON);
      setMovies(movieJSON.results);
  };


  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="movie-container">
      {
        movies.map(movie => (
          <Movie key={movie.id} {...movie}/>
        ))
      }
    </div>
  );
}

export default App;
