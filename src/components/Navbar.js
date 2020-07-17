import React from 'react';
import {handleMovieSearch,addMovieToList} from '../actions';
import { connect } from 'react-redux';

class Navbar extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      searchText: ''
    };
  }

  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovieToList(movie));
  }

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value
    });
  }
  handleSearch = () =>{
    const {searchText}=this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  };
  render (){
    const { result: movie,showSearchResults } = this.props.search;
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} placeholder="Search..."/>
          <button id="search-btn" onClick={this.handleSearch}>Search</button>

          {showSearchResults &&
            <div className="search-results">
              {movie.Response!=='False' &&
              <div className="search-result">
                <img src={movie.Poster} alt="search-pic" />

                <div className="movie-info">
                  <span>{movie.Title}</span>
                  <button onClick={()=> this.handleAddToMovies(movie)}>Add to Movies</button>
                </div>
              </div>
              }
              {movie.Response==='False'?<div className='no-movies'>No such Title found!!!</div>:null}
            </div>
          }
        </div>
      </div>
    );
  }
}

// class NavbarWrapper extends React.Component{
//   render(){
//     return (
//       <StoreContext.Consumer>
//         {(store) => <Navbar dispatch={store.dispatch} search={this.props.search}/>}
//       </StoreContext.Consumer>
//     );
//   }
// }

function mapToState({search}){
  return {
    search
  }
}

export default connect(mapToState)(Navbar);
