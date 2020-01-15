import React, {useState} from 'react';
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
//ShowMovies({elements, favs, watched, setFavsWatched})

  const pageItems = {"favs": favs, "watched": watched, "viewed": viewed};

  const page = (()=> {
    switch(whichPage){
      case "search":
        return <MovieSearch title={search} onClickHandler={chooseMovie} />;
      case "moviePage":
        return <MoviePage movieId = {movieId} addToFavWatched={addToFavWatch} isWatched={watched.includes(movieId)} />;
      default:
        return <ShowMovies elements={pageItems[whichPage]} favourites={favs} watch={watched} setFavsWatched={addToFavWatch} />;
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
