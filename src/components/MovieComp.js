import React, {useState, useEffect, useCallback} from 'react';


function MovieComp({title, onClickHandler}){
    const [movie, setMovie] = useState(null);
    const [url, setUrl] = useState(`https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=${title}`);

    const clickFunc = useCallback(() =>{

    }, [onClickHandler]);

    useEffect(() => {
        const defFetch = async () => {
            fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=Avengers%20Endgame", {
	                "method": "GET",
	                "headers": {
		            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
		            "x-rapidapi-key": "4d1910cdadmsh451bc57530aeb39p1a93ebjsn853bad1781c1"
	        }
            })
            .then(response => {
                console.log("SSS");
                console.log(response);
                
            })
            .catch(err => {
	            console.log(err);
            });
        }
        defFetch();
    }, [url]);

    return(
        <button onClick = {clickFunc}>EEE</button>
    );
}

export default MovieComp;