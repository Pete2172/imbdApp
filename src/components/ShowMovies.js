import React, {useEffect, useState, useCallback} from 'react';
import MoviePage from './MoviePage.js';
import './ShowMovies.css';


function ShowMovies({elements, favourites, watch, setFavs, setWatched}){

       
    const movies = (() => elements.map(e => {
        return <MoviePage movieId={e} isFav={favourites.includes(e)} isWatched={watch.includes(e)} addToWatched={setWatched} addToFav={setFavs} />;
    }))();

    return(
        <div className="moviesSet">
            <p>The amount of founded titles: {elements.length}</p>
            {movies}
        </div>
    );
}

export default ShowMovies;
