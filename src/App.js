import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MovieSearch from './components/MovieSearch.js';

function App() {

  const [search, setSearch] = useState("Avengers");

  return (
    <div className="App">
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
      <MovieSearch title={search} onClickHandler={() => {console.log("clicked!")}} />
    </div>
  );
}

export default App;
