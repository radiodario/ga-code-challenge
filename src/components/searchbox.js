const React = require('react');
const movieDataApi = require('../movieDataApi');
const SearchResult = require('./searchResult');

// This component handles searching, displaying an input
// and a search result list
module.exports = React.createClass({

  // we keep on our component's state the user's query
  // and an array of results
  getInitialState: function() {
    return {
      query: '',
      results: []
    }
  },

  // this function will handle users input on the
  // search input, setting the query property of
  // our component's state
  handleInputChange: function(event) {
    const query = event.target.value;
    this.setState({query : query});
  },

  // execute this when users click on the "search"
  // button, if we have a query, search for it on
  // the omdb API
  performSearch: function() {
    const query = this.state.query;
    // don't do anything if we don't have a query
    if (!query) return;
    const that = this;
    movieDataApi.performSearch(query)
      .then(function(results) {
        // once the results are received we
        // set them on our state
        that.setState({results: results})
      })
  },

  render: function() {
    // create an array of SearchResult elements for each of the
    // results we got back from the api
    const searchResults = this.state.results.map(function(result) {
      return (
        <SearchResult
          key={result.imdbID}
          {...result}
        />
      );
    });

    // note how we attach the onChange and onClick
    // handlers to the input and button elements so
    // that they are triggered on user input
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
