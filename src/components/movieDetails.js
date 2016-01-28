const React = require('react');
const movieDataApi = require('../movieDataApi');

// this component renders details about a movie
module.exports = React.createClass({

  // intially, we set the state of the component to
  // be loading.
  getInitialState: function() {
    return {
      loading: true
    }
  },

  // when the component is about to be rendered, we
  // fetch the movie information from the OMDB api,
  // and set the response as the state of the component
  componentWillMount: function() {
    const that = this;
    movieDataApi.getMovieDetails(this.props.params.imdbID)
      .then(function(results) {
        // we set loading to false because we have
        // finished loading the movie details
        results.loading = false;
        that.setState(results);
      })
  },

  // this function will be triggered when clicking on the
  // 'Add To Favorites' button, and will add the movie
  // details to our favorites list
  addToFavorites: function() {
    this.setState({favorite: true});
    movieDataApi.addFavorite(this.state);
  },

  // we render the movie details
  render: function() {
    // if we are loading, just display
    // loading
    if (this.state.loading) {
      return (
        <div className="movie-details">
          Loading
        </div>
      );
    }

    return (
      <div className="movie-details">
        <div className="movie-details__img">
          <img src={this.state.Poster} />
        </div>
        <div className="movie-details__body">
          <h2 className="movie-details__body__title">
            {this.state.Title}
            <span className="movie-details__body__title__year">
              {'('+ this.state.Year + ')'}
            </span>
          </h2>
          <div
            className="movie-details__body__toolbar"
            style={{display: (this.state.favorite) ? 'none' : null}}
          >
            {
            /*
             * We attach `this.addToFavorites` as the listener for the click event
             * on this the button, so that the `addToFavorites` function above is run
             * when clicking
             */
            }
            <button onClick={this.addToFavorites}>Add to favorites</button>
          </div>
          <div className="movie-details__body__plot">
            <p>{this.state.Plot}</p>
          </div>
          <div className="movie-details__body__general">
            <p>Director: {this.state.Director}</p>
            <p>Writer: {this.state.Writer}</p>
            <p>Actors: {this.state.Actors}</p>
          </div>
          <div className="movie-details__body__ratings">
            <p>Metascore: {this.state.Metascore}</p>
            <p>Imdb: {this.state.imdbRating}</p>
          </div>
        </div>
      </div>
    );
  }
})
