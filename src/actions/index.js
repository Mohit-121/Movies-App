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

// action types
export const ADD_MOVIES='ADD_MOVIES';
export const ADD_TO_FAVOURITE='ADD_FAVOURITE';
export const REMOVE_FROM_FAVOURITE='REMOVE_FROM_FAVOURITE';
export const SET_SHOW_FAVOURITES='SET_SHOW_FAVOURITES';