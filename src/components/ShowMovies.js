import React, {useEffect, useState, useCallback} from 'react';
import MoviePage from './MoviePage.js';
import './ShowMovies.css';


function ShowMovies({elements, favs, watched, setFavsWatched}){

    const [elems, setElems] = useState(elements);

    const setFW = useCallback((id, type) => {
        
        setFavsWatched(id, type);
    }, [setFavsWatched]);

   // movieId, isFav, isWatched, addToFavWatched
    const movies = (elements.map(e => {
        return <MoviePage movieId={e} isFav={favs.includes(e)} isWatched={watched.includes(e)} addToFavWatched={setFW} />
    }))();

    return(
        <div className="moviesSet">
            {movies}
        </div>
    );
}

