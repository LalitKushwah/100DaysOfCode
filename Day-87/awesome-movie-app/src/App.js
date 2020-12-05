import React, { useEffect, useState } from 'react';
import { useStore } from 'react-redux';

import './App.css';

import Movie from './components/Movie';
import Header from './components/shared/Header';

function App() {
  
  const [ movies, setMovies ] = useState([]);

  const store = useStore();
  
  store.subscribe(async () => {
     const searchUrl = `${process.env.REACT_APP_SEARCH_API}&query=${store.getState()}`;
     const movieList = await fetch(searchUrl);
     const movieListJson = await movieList.json();
     console.log(movieListJson);
     setMovies(movieListJson.results);
  });


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
    <React.Fragment>
      <Header />
      <div className="movie-container">
        {
          movies.map(movie => (
            <Movie key={movie.id} {...movie}/>
          ))
        }
      </div>
    </React.Fragment>
  );
}

export default App;
