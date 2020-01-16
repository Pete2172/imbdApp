import React, {useState, useEffect, useCallback} from 'react';
import './MovieSearch.css';


function MovieSearch({title, onClickHandler}){

    const [movies, setMovies] = useState(null);
    const [url, setUrl] = useState(`https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=${title}`);

    const clickFunc = useCallback((id) =>{
        onClickHandler(id);
    }, [onClickHandler]);

    useEffect(() => {
        setUrl(`https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=${title}`);
    }, [title]);

    useEffect(() => {
        const defFetch = async () => {
            fetch(url, {
	                "method": "GET",
	                "headers": {
		            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
		            "x-rapidapi-key": "4d1910cdadmsh451bc57530aeb39p1a93ebjsn853bad1781c1"
	        }
            })
            .then(async (response) => {
                const responseJSON = await response.json();
                setMovies(responseJSON);
            })
            .catch(err => {
	            console.log(new Error(err));
            });
        }
        defFetch();
    }, [url]);

    if(movies !== null){
        if(!movies.hasOwnProperty("Error")){
            let index = 0;
            const moviesList = movies.Search.map(e => {
                const {Title, Year, imdbID, Type, Poster} = e;
                const caption = `${Title}, ${Year}, ${Type}`;
                const idComp = `${imdbID} + ${index}`;
                index++;
                return <div className="poster" key={idComp} onClick = {() => clickFunc(imdbID)} >
                    <div className="overlay" >
                        <img src={Poster} alt={caption} />
                        <a className="link"><p>{Title}</p><p>{Year}</p></a>
                    </div>
                </div>
            });
            return <div className="moviesList">{moviesList}</div>
        }
        else{
            return <p>Find your movie...</p>
        }
    }
    else{
        return <p>Find your movie...</p>
    }
}

export default MovieSearch;