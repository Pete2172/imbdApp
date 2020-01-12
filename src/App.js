import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieComp from './components/MovieComp.js';

function App() {
  return (
    <div className="App">
      <MovieComp title="Avengers" onClickHandler={() => {console.log("clicked!")}} />
    </div>
  );
}

export default App;
