import React, { useEffect, useState } from 'react';
import { useStore } from 'react-redux';
import { MovieService } from './services/movie.service';

import './App.css';

import Movie from './components/Movie';
import Header from './components/shared/Header';

function App() {
  
  const [ movies, setMovies ] = useState([]);

  const store = useStore();
  
  store.subscribe(async () => {
     const movieList = await new MovieService().getMoviesWithSearchKeyword(store.getState());
     setMovies(movieList.data.results);
  });


  const getMovie = async () => {
      const movieJSON = await new MovieService().getMoviesList();
      setMovies(movieJSON.data.results);
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
