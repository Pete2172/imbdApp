import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MovieSearch from './components/MovieSearch.js';
import MoviePage from './components/MoviePage.js';

function App() {

  const [search, setSearch] = useState("");
  const [movieId, setMovieId] = useState(null);
  //<MovieSearch title={search} onClickHandler={() => {console.log("clicked!")}} />
  const chooseMovie = (id) => {
    console.log("clicked");
  }
/*
  const whichPage = (()=> {
    //return (movieId !== null) ?  <MoviePage movieId = {movieId} /> :  <MovieSearch title={search} onClickHandler={chooseMovie} />
  })();
*/
  return (
    <div className="App">
      <input type="text" value={search} placeholder="Type a title of a movie..." value="Avengers" onChange={e => setSearch(e.target.value)} />
      <MovieSearch title={search} onClickHandler={chooseMovie} />
    
    </div>
  );
}

export default App;
