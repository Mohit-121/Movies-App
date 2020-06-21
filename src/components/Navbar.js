import React from 'react';
import { data } from '../data';
import {handleMovieSearch,addMovieToList} from '../actions';

class Navbar extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      showSearchResults: true,
      searchText: ''
    };
  }

  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovieToList(movie));
    this.setState({
      showSearchResults: false
    });
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
    const { showSearchResults } = this.state;
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} placeholder="Search..."/>
          <button id="search-btn" onClick={this.handleSearch}>Search</button>

          {showSearchResults && 
            <div className="search-results">
              <div className="search-result">
                <img src={data[0].Poster} alt="search-pic" />

                <div className="movie-info">
                  <span>{data[0].Title}</span>
                  <button onClick={()=> this.handleAddToMovies(data[0])}>Add to Movies</button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Navbar;
