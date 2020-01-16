import React, {useEffect, useState, useCallback} from 'react';
import {IoMdEye, IoIosHeart} from 'react-icons/io';
import './MoviePage.css';


function MoviePage({movieId, isFav, isWatched, addToFav, addToWatched}){

    const ratingsIcons = {"Internet Movie Database": ["https://icons-for-free.com/iconfiles/png/512/films+imdb+internet+movie+database+movie+television+icon-1320192452769839815.png", 0],
                          "Rotten Tomatoes": ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/1009px-Rotten_Tomatoes.svg.png", 1],
                          "Metacritic": ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Metacritic.svg/768px-Metacritic.svg.png", 2]
        };
    const [movie, setMovie] = useState({
        "Title":"",
        "Year":"",
        "Rated":"",
        "Released":"",
        "Runtime":"",
        "Genre":"",
        "Director":"",
        "Writer":"",
        "Actors":"",
        "Plot":"",
        "Language":"",
        "Country":"",
        "Awards":"",
        "Poster":"",
        "Ratings":[
        {
        "Source":"Internet Movie Database",
        "Value":""
        },
        {
        "Source":"Rotten Tomatoes",
        "Value":""
        },
        {
        "Source":"Metacritic",
        "Value":""
        }],
        "Metascore":"",
        "imdbRating":"",
        "imdbVotes":"",
        "imdbID":"",
        "Type":"",
        "DVD":"",
        "BoxOffice":"",
        "Production":"",
        "Website":"",
        "Response":"",
        });

    const addToFavourites = useCallback((id) => { 
        addToFav(id);
    }, [addToFav]);

    const addToWatchedFilms = useCallback((id) => {
            addToWatched(id);
    }, [addToWatched]);

    useEffect(() => {
        const fetchMovieData = async () => {
            fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?i=${movieId}&r=json`, {
	            "method": "GET",
	            "headers": {
		        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
		    "x-rapidapi-key": "4d1910cdadmsh451bc57530aeb39p1a93ebjsn853bad1781c1"
	        }
        })
        .then(async (response) => {
            const responseJSON = await response.json();
            setMovie(responseJSON);
        })
        .catch(err => {
	        console.log(err);
        });
        }
        fetchMovieData();
    }, [movieId]);

    const ratings = (() => {
        if(movie !== null){
            if(movie.hasOwnProperty("Ratings")){
                return movie.Ratings.map(e => {
                    return <div className="ratingsInfo" key={`ratingsIcon${ratingsIcons[e["Source"]][1]}`}>
                        <img src={ratingsIcons[e["Source"]][0]} alt="" />
                        <span>{e.Value}</span>
                    </div>;
                });
            }
            else{
                return <p>No ratings available</p>;
            }
        }
        else{
            return <p>No ratings available</p>;
        }
    })();

    return (
        <div className="movieData">
            <div className="gridPoster">
                <img src={movie.Poster} alt="" />
                <div className="watchFav">
                    <div className={(isWatched === true) ? "eyeIcon_select" : "eyeIcon"} onClick={() => addToWatchedFilms(movieId) }><IoMdEye /></div>
                    <div className={(isFav === true) ? "heartIcon_select" : "heartIcon"} onClick={() => addToFavourites(movieId) }><IoIosHeart /></div>
                </div>
            </div>
            <div className="movieDetails">
                <h1>{movie.Title} ({movie.Year})</h1>
                <p className="movieRuntime">{movie.Runtime}</p>
                <div className="ratingsMovie">
                    {ratings}
                </div>
                <p className="moviePlot">{movie.Plot}</p>
                <div className="movieInfo">
                <div className="movieInfoElem"><span>Director: </span><p>{movie.Director}</p></div>
                    <div className="movieInfoElem"><span>Writer: </span><p>{movie.Writer}</p></div>
                    <div className="movieInfoElem"><span>Genre: </span><p>{movie.Genre}</p></div>
                    <div className="movieInfoElem"><span>Country: </span><p>{movie.Country}</p></div>
                    <div className="movieInfoElem"><span>Released: </span><p>{movie.Released}</p></div>
                    <div className="movieInfoElem"><span>Rating: </span><p>{movie.Rated}</p></div>
                    <div className="movieInfoElem"><span>Cast: </span><p>{movie.Actors}</p></div>
                </div>
            </div>

        </div>
    )
}

export default MoviePage;