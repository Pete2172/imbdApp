import React, {useEffect, useState} from 'react';
import {IoMdEye, IoIosHeart} from 'react-icons/io';
import './MoviePage.css';


function MoviePage({movieId}){

    const ratingsIcons = {"Internet Movie Database": "https://icons-for-free.com/iconfiles/png/512/films+imdb+internet+movie+database+movie+television+icon-1320192452769839815.png",
                          "Rotten Tomatoes": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/1009px-Rotten_Tomatoes.svg.png",
                          "Metacritic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Metacritic.svg/768px-Metacritic.svg.png"
        };
    const [movie, setMovie] = useState({
        "Title":"Avengers: Endgame",
        "Year":"2019",
        "Rated":"PG-13",
        "Released":"26 Apr 2019",
        "Runtime":"181 min",
        "Genre":"Action, Adventure, Drama, Sci-Fi",
        "Director":"Anthony Russo, Joe Russo",
        "Writer":"Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Jim Starlin (Thanos, Gamora & Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Steve Englehart (Mantis created by), Don Heck (Mantis created by)",
        "Actors":"Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
        "Plot":"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        "Language":"English, Japanese, Xhosa, German",
        "Country":"USA",
        "Awards":"Nominated for 1 BAFTA Film Award. Another 32 wins & 75 nominations.",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
        "Ratings":[
        {
        "Source":"Internet Movie Database",
        "Value":"8.5/10"
        },
        {
        "Source":"Rotten Tomatoes",
        "Value":"94%"
        },
        {
        "Source":"Metacritic",
        "Value":"78/100"
        }],
        "Metascore":"78",
        "imdbRating":"8.5",
        "imdbVotes":"640,310",
        "imdbID":"tt4154796",
        "Type":"movie",
        "DVD":"30 Jul 2019",
        "BoxOffice":"N/A",
        "Production":"Marvel Studios",
        "Website":"N/A",
        "Response":"True",
        });

    const filteredWriter = () => {
        const {Writer} = movie;
        console.log(Writer.split(','));
        return Writer.split(',')
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