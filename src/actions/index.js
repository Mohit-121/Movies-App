// action creators
export function addMovies (movies){
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addFavoruite (movie){
    return {
        type: ADD_TO_FAVOURITE,
        movie
    }
}

export function removeFavourite (movie){
    return {
        type: REMOVE_FROM_FAVOURITE,
        movie
    }
}

export function setShowFavourites (val){
    return {
        type: SET_SHOW_FAVOURITES,
        val
    }
}

export function addMovieToList(movie){
    return {
        type: ADD_MOVIE_TO_LIST,
        movie
    }
}

export function handleMovieSearch(movie){
    const url=`http://www.omdbapi.com/?apikey=3ca5df7&s=${movie}`;
    return function(dispatch){
        fetch(url).then(response => response.json())
        .then(movies => {
            if(movies.Response!=='False'){
                console.log('movies',movies.Search);
                dispatch(addMovieSearchResult(movies.Search));
            }else{
                dispatch(addMovieSearchResult([]));
            }
            // dispatch action
        });
    }
}

export function addMovieSearchResult(movies){
    return {
        type: ADD_SEARCH_RESULT,
        movies
    };
}

// action types
export const ADD_MOVIES='ADD_MOVIES';
export const ADD_TO_FAVOURITE='ADD_FAVOURITE';
export const REMOVE_FROM_FAVOURITE='REMOVE_FROM_FAVOURITE';
export const SET_SHOW_FAVOURITES='SET_SHOW_FAVOURITES';
export const ADD_MOVIE_TO_LIST='ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT='ADD_SEARCH_RESULT';