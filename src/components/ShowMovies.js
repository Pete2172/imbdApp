import React from 'react';
import MoviePage from './MoviePage.js';
import './ShowMovies.css';


function ShowMovies({elements, favourites, watch, setFavs, setWatched}){

       
    const movies = (() => elements.map(e => {
        return <MoviePage key={e} movieId={e} isFav={favourites.includes(e)} isWatched={watch.includes(e)} addToWatched={setWatched} addToFav={setFavs} />;
    }))();

    return(
        <div className="moviesSet">
            <h2>The amount of found titles: {elements.length}</h2>
            {movies}
        </div>
    );
}

export default ShowMovies;

