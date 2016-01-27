const React = require('react');
const movieDataApi = require('../movieDataApi');
const SearchResult = require('./searchResult');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      query: '',
      results: []
    }
  },

  handleInputChange: function(event) {
    const query = event.target.value;
    this.setState({query : query});
  },

  performSearch: function() {
    const query = this.state.query;
    const that = this;
    movieDataApi.performSearch(query)
      .then(function(results) {
        that.setState({results: results})
      })
  },

  render: function() {

    const searchResults = this.state.results.map(function(result) {
      return (
        <SearchResult
          key={result.imdbID}
          {...result}
        />
      );
    });

    return (
      <div className="movie-search">
        <div className="search-area">
          <input
            className="search-area__search-input"
            type="search"
            onChange={this.handleInputChange}
          />
          <button
            className="search-area__search-button"
            onClick={this.performSearch}
            >
            Search
          </button>
        </div>
        <div className="search-results">
          {searchResults}
        </div>
      </div>
    );
  }

})
