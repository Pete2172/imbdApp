import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MovieSearch from './components/MovieSearch.js';
import MoviePage from './components/MoviePage.js';

function App() {

  const [search, setSearch] = useState("");
  const [movieId, setMovieId] = useState("");
  //<MovieSearch title={search} onClickHandler={() => {console.log("clicked!")}} />
  const chooseMovie = (id) => {
    setMovieId(id);
  }

  const whichPage = (()=> {
    return (movieId !== "") ?  <MoviePage movieId = {movieId} /> :  <MovieSearch title={search} onClickHandler={chooseMovie} />
  })();

  return (
    <div className="App">
      <header>
        <div className="searchBar">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" />
          <input type="text" value={search} placeholder="Type a title of a movie..." onChange={e => {setSearch(e.target.value); setMovieId("")}} />
        </div>
      </header>
      <body>
        <div className="filmPage">
            {whichPage}
        </div>
      </body>    
    </div>
  );
}

export default App;
