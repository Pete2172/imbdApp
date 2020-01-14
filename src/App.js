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
        <nav>
            <input type="text" value={search} placeholder="Type a title of a movie..." onChange={e => {setSearch(e.target.value); setMovieId("")}} />
            <ul>
              <li>Your favourites</li>
              <li>Watched</li>
              <li>Recently viewed</li>
            </ul>
        </nav>
      </header>

      <main>
        <div className="filmPage">
        <MovieSearch title="Avengers Endgame" onClickHandler={chooseMovie} />
        </div>
      </main>    
    </div>
  );
}

export default App;
