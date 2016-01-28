var React = require('react');
var Link = require('react-router').Link;
var movieDataApi = require('../movieDataApi');
var SearchResult = require('./searchResult');

/**
 * This component displays a list of our favorite movies
 * rendered as SearchResult elements
 */
module.exports = React.createClass({

  // Returns the initial state of the component, which is
  // loading
  getInitialState: function() {
    return {
      loading: true
    };
  },

  // When the component will be rendered, we load
  // the favorites from our api
  componentWillMount: function() {
    const that = this;
    movieDataApi.getFavorites()
      .then(function(favorites) {
        that.setState({
          loading: false,
          favorites: favorites
        });
      });
  },


  render: function() {
    // if we are loading, then we display
    // the word loading
    if (this.state.loading) {
      return (
        <div className="favorites">
          Loading
        </div>
      )
    }

    // for each favorite returned by the API, we render a
    // SearchResult element. Note we have to provide each with a unique
    // key so that react knows how to update the page efficiently.
    // the imdbID property of the movie is perfect for this
    const favorites = this.state.favorites.map(function(fave) {
      return (
        <SearchResult
          key={fave.imdbID}
          {...fave}
        />
      );
    });

    // now put all of the rendered favorites inside a div
    return (
      <div className="favorites">
        {favorites}
      </div>

    )
  }

});
