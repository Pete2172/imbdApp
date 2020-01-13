import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MovieSearch from './components/MovieSearch.js';
import MoviePage from './components/MoviePage.js';

function App() {

  const [search, setSearch] = useState("");
  //<MovieSearch title={search} onClickHandler={() => {console.log("clicked!")}} />

  return (
    <div className="App">
      <input type="text" value={search} placeholder="Type a title of a movie..." onChange={e => setSearch(e.target.value)} />
      <MoviePage />
    </div>
  );
}

export default App;
