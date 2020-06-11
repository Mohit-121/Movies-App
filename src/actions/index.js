// action creators
export function addMovies (movies){
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addFavoruite (movie){
    return {
        type: ADD_FAVOURITE,
        movie
    }
}

// action types
export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVOURITE='ADD_FAVOURITE';