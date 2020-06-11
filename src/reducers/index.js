import {ADD_MOVIES,ADD_FAVOURITE} from '../actions/index';

const intialMoviesState = {
    list: [],
    favourites: []
}
export default function movies(state=intialMoviesState,action){
    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        default: return state;
    }
}