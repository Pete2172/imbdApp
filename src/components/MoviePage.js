import React, {useEffect, useState} from 'react';
import {IoMdEye, IoIosHeart} from 'react-icons/io';
import './MoviePage.css';


function MoviePage({movieId}){

    const ratingsIcons = {"Internet Movie Database": "https://icons-for-free.com/iconfiles/png/512/films+imdb+internet+movie+database+movie+television+icon-1320192452769839815.png",
                          "Rotten Tomatoes": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/1009px-Rotten_Tomatoes.svg.png",
                          "Metacritic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Metacritic.svg/768px-Metacritic.svg.png"
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
    
    const [url, setUrl] = useState(`https://movie-database-imdb-alternative.p.rapidapi.com/?i=${movieId}&r=json`)

    useEffect(() => {
        const fetchMovieData = async () =>{
            fetch(url, {
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
    
    const filteredWriter = () => {
        const {Writer} = movie;

        return (Writer.split(',').length === 1) ? Writer : Writer.split(',')
                .filter(e => e.includes("(screenplay by"))
                .join(',')
                .replace(/\(screenplay by\)/g, "");
    }

    const ratings = (() => {
        if(movie !== null){
            if(movie.hasOwnProperty("Ratings")){
                return movie.Ratings.map(e => {
                    return <div className="ratingsInfo">
                        <img src={ratingsIcons[e["Source"]]} />
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
        <div className="movieGrid">
            <div className="gridPoster">
                <img src={movie.Poster} />
                <div className="watchFav">
                    <div className="eyeIcon"><IoMdEye /></div>
                    <div className="heartIcon"><IoIosHeart style={{verticalAlign: 'baseline'}}/></div>
                </div>
            </div>
            <h>{movie.Title} ({movie.Year})</h>
            <p className="movieRuntime">{movie.Runtime}</p>
            <p className="moviePlot">{movie.Plot}</p>
            <div className="movieInfo">
                <div className="movieInfoElem"><span>Director: </span><span>{movie.Director}</span></div>
                <div className="movieInfoElem"><span>Screenplay: </span>{filteredWriter()}</div>
                <div className="movieInfoElem"><span>Genre: </span>{movie.Genre}</div>
                <div className="movieInfoElem"><span>Country: </span>{movie.Country}</div>
                <div className="movieInfoElem"><span>Released: </span>{movie.Released}</div>
                <div className="movieInfoElem"><span>Rating: </span>{movie.Rated}</div>
                <div className="movieInfoElem"><span>Cast: </span>{movie.Actors}</div>
            </div>
            <div className="ratingsMovie">
                {ratings}
            </div>
        </div>
    )
}

export default MoviePage;