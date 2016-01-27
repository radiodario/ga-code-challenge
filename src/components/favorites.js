var React = require('react');
var Link = require('react-router').Link;
var movieDataApi = require('../movieDataApi');
var SearchResult = require('./searchResult');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      loading: true
    };
  },

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
    if (this.state.loading) {
      return (
        <div className="favorites">
          Loading
        </div>
      )
    }

    const favorites = this.state.favorites.map(function(fave) {
      return (
        <SearchResult
          key={fave.imdbID}
          {...fave}
        />
      );
    });

    return (
      <div className="favorites">
        {favorites}
      </div>

    )
  }

});
