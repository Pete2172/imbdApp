import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import MovieSearch from './components/MovieSearch.js';
import MoviePage from './components/MoviePage.js';
import ShowMovies from './components/ShowMovies.js';


function App() {

  const [search, setSearch] = useState("");
  const [movieId, setMovieId] = useState("");
  const [favs, setFavs] = useState(JSON.parse(localStorage.getItem('favs')) || []);
  const [watched, setWatched] = useState(JSON.parse(localStorage.getItem('watched')) || []);
  const [viewed, setViewed] = useState([]);

  const [whichPage, setWhichPage] = useState("search");

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs));
  }, [favs]);

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify(watched));
  }, [watched]);


  const chooseMovie = (id) => {
    setMovieId(id);
    setViewed([id, ...viewed]);
    setWhichPage("moviePage");
  }

  const addToWatchedFilms = (id) => {
    if(!watched.includes(id)){
      setWatched([id, ...watched]);
    }
    else{
      setWatched(watched.filter(e => e !== id));
    }
    setWhichPage(whichPage);
  }

  const addToFavourites = (id) => {
    if(!favs.includes(id)){
      setFavs([id, ...favs]);
    }
    else{
      setFavs(favs.filter(e => e !== id));
    }
    console.log(`Favs: ${favs}`);
    setWhichPage(whichPage);
  }

  const pageItems = {"favs": favs, "watched": watched, "viewed": viewed};

  const page = (()=> {
    switch(whichPage){
      case "search":
        return <MovieSearch title={search} onClickHandler={chooseMovie} />;
      case "moviePage":
        return <MoviePage movieId = {movieId} addToFav={addToFavourites} addToWatched={addToWatchedFilms} isWatched={watched.includes(movieId)} isFav={favs.includes(movieId)} />;
      default:
        return <ShowMovies elements={pageItems[whichPage]} favourites={favs} watch={watched} setFavs={addToFavourites} setWatched={addToWatchedFilms} />;
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
