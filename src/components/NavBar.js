import React, {useCallback} from 'react';
import './NavBar.css';

function NavBar({onClickHandler, onChangeHandler}){

    const onClickFunc = useCallback((type) => {
        onClickHandler(type);
    }, [onClickHandler]);

    const onChangeFunc = useCallback((e) => {
        onChangeHandler(e);
    }, [onChangeHandler]);
// //onChange={e => {setSearch(e.target.value); setMovieId(""); setWhichPage("search")}} />
    return (
    <nav>
        <input type="text"  placeholder="Type a title of a movie..." onChange={e => {onChangeFunc(e.target.value)}} /> 
        <ul>
          <li onClick={() => onClickFunc("favs")}>Favourites</li>
          <li onClick={()=> onClickFunc("watched")}>Watched</li>
          <li onClick={()=> onClickFunc("viewed")}>Recently viewed</li>
        </ul>
    </nav>
    );
}

export default NavBar;