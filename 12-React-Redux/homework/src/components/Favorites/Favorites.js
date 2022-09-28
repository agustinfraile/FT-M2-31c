import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../actions";
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies?.map(pelicula => 
            <div key={pelicula.id}>
              <Link to={`/movie/${pelicula.id}`}>
                 <li>
                  { pelicula.title }
                 </li>
              </Link>
              <button onClick={()=> this.props.removeMovieFavorite(pelicula.id)}>
                🗑️
              </button>
            </div>    
          )}
        </ul>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie)),
  };
}

export default connect(
  mapStateToProps,
  {removeMovieFavorite}
)(ConnectedList);
