import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import MovieSearch from './components/MovieSearch.js';
import MoviePage from './components/MoviePage.js';
import ShowMovies from './components/ShowMovies.js';

function App() {

  const [search, setSearch] = useState("");
  const [movieId, setMovieId] = useState("");
  const [favs, setFavs] = useState(["tt4154796", "tt0268978"] );
  const [watched, setWatched] = useState(["tt0268978"]);
  const [viewed, setViewed] = useState([]);

  const [whichPage, setWhichPage] = useState("search");

  const pagesArray = {"search": search, "moviePage": }

  const chooseMovie = (id) => {
    setMovieId(id);
    setViewed([id, ...viewed]);
    setWhichPage("moviePage");
  }

  const addToFavWatch = (id, option) => {
    if(!watched.includes(id)){
      setWatched([id, ...watched]);
    }
    else{
      setWatched(watched.filter(e => e !== id));
    }
  }

  const page = (()=> {
    switch(whichPage){
      case "search":
        return <MovieSearch title={search} onClickHandler={chooseMovie} />;
      case "moviePage":
        return <MoviePage movieId = {movieId} addToFavWatched={addToFavWatch} isWatched={watched.includes(movieId)} />;
      case "favs":
        return (favs !== null) ? (favs.map(e => {
          return <MoviePage movieId = {e}  addToFavWatched={addToFavWatch} /> 
        })) : <p>You haven't added any movies to favourites!</p> ;
      case "watched":
        return (watched.length > 0) ? (watched.map(e => {
          return <MoviePage movieId = {e}  addToFavWatched={addToFavWatch} isWatched={watched.includes(movieId)} /> 
        })) : <p>You haven't added any movies to watched films!</p> ;
      case "viewed":
        return (viewed.length > 0) ? (viewed.map(e => {
          return <MoviePage movieId = {e}  addToFavWatched={addToFavWatch} /> 
        })) : <h1>You haven't viewed any movies recently.</h1> ;
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

//<MoviePage movieId="tt0268978" addToFavWatched={addToFavWatch} isWatched={watched.includes(movieId)} />

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
