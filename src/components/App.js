import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies } from '../actions';

class App extends React.Component{
  componentDidMount(){
    const {store}=this.props;
    store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate();
    });
    // make api call
    // Dispatch action
    store.dispatch(addMovies(data));

    console.log('STATE',store.getState());
  }

  isMovieFavourite = (movie) =>{
    const {favourites} = this.props.store.getState();
    const index = favourites.indexOf(movie);
    if(index===-1) return false;
    return true;
  }

  render(){
    const {list}=this.props.store.getState();
    console.log(this.props.store.getState());
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          
          <div className="list">
            {list.map( (movie,index) => (
              <MovieCard 
              movie={movie} 
              key={`movies-${index}`}
              store={this.props.store}
              isFavourite={this.isMovieFavourite(movie)}
            />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
