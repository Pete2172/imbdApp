import React, {useEffect, useState, useCallback} from 'react';
import MoviePage from './MoviePage.js';
import './ShowMovies.css';


function ShowMovies({elements, favourites, watch, setFavsWatched, messageError}){

    const setFW = useCallback((id, type) => {
        setFavsWatched(id, type);
    }, [setFavsWatched]);

    const movies = (() => elements.map(e => {
        console.log(watch);
        return <MoviePage movieId={e} isFav={favourites.includes(e)} isWatched={watch.includes(e)} addToFavWatched={setFW} />;
    }))();

    return(
        <div className="moviesSet">
            {movies}
        </div>
    );
}

export default ShowMovies;

