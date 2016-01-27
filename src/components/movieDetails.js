const React = require('react');
const movieDataApi = require('../movieDataApi');

module.exports = React.createClass({

  componentWillMount: function() {
    const that = this;
    movieDataApi.getMovieDetails(this.props.params.imdbID)
      .then(function(results) {
        results.loading = false;
        that.setState(results);
      })
  },

  getInitialState: function() {
    return {
      loading: true
    }
  },

  addToFavorites: function() {
    this.setState({favorite: true});
    movieDataApi.addFavorite(this.state);
  },

  render: function() {
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
