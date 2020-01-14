import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MovieSearch from './components/MovieSearch.js';
import MoviePage from './components/MoviePage.js';

function App() {

  const [search, setSearch] = useState("");
  const [movieId, setMovieId] = useState("");
  const [favs, setFavs] = useState(["tt4154796", "tt0268978"] );
  const [watched, setWatched] = useState(["tt0268978"]);
  const [viewed, setViewed] = useState([]);
  const [whichPage, setWhichPage] = useState("search");

  const chooseMovie = (id) => {
    setMovieId(id);
    setViewed([id, ...viewed]);
    setWhichPage("moviePage");
  }

  const page = (()=> {
    switch(whichPage){
      case "search":
        return <MovieSearch title={search} onClickHandler={chooseMovie} />;
      break;
      case "moviePage":
        return <MoviePage movieId = {movieId} />;
      break;
      case "favs":
        return (favs !== null) ? (favs.map(e => {
          return <MoviePage movieId = {e} /> 
        })) : <p>You haven't added any movies to favourites!</p> ;
      break;
      case "watched":
        return (watched !== null) ? (watched.map(e => {
          return <MoviePage movieId = {e} /> 
        })) : <p>You haven't added any movies to watched films!</p> ;
      break;
      case "viewed":
        return (viewed.length > 0) ? (viewed.map(e => {
          return <MoviePage movieId = {e} /> 
        })) : <p>You haven't viewed any movies recently.</p> ;
    }
    
  })();

  const navBar = <header>
  <nav>
      <input type="text" value={search} placeholder="Type a title of a movie..." onChange={e => {setSearch(e.target.value); setMovieId(""); setWhichPage("search")}} />
      <ul>
        <li onClick={() => setWhichPage("favs")}>Favourites</li>
        <li onClick={()=> setWhichPage("watched")}>Watched</li>
        <li onClick={()=> setWhichPage("viewed")}>Recently viewed</li>
      </ul>
  </nav>
  </header>;

  return (
    <div className="App">
      {navBar}

      <main>
        <div className="filmPage">
        {page}
        </div>
      </main>    
    </div>
  );
}

export default App;
