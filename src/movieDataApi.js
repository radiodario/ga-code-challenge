const request = require('superagent');

const OMDBAPI_URL = 'http://www.omdbapi.com';
// this is the base URL of our api. Since we're also serving files
// from the api, we can leave this blank.
const FAVES_URL = '';

module.exports = {
  /**
   * given a query, we search for a movie on OMDBApi
   * and return a Promise of the results of this query
   * For mor information on Promises, refer to
   * https:*developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
   * @param query {string} The query to search for, movie title
   */
  performSearch: function(query) {
    return new Promise(function(resolve, reject) {
      // use superagent's Request method to perform an
      // HTTP GET request to the OMDBAPI
      request
      .get(OMDBAPI_URL + '/')
        .query({s: query})
        .set('Accept', 'application/json')
        .end(function(err, res) {
          if (err || !res.ok) {
            return reject(err);
          }

          resolve(res.body.Search);
        });
    });
  },

  /**
   * Get details about a movie from OMDB given a movies'
   * @param imdbID {string} the id to search for
   */
  getMovieDetails: function(imdbID) {
    return new Promise(function(resolve, reject) {
      request
      .get(OMDBAPI_URL + '/')
        .query({i: imdbID})
        .set('Accept', 'application/json')
        .end(function(err, res) {
          if (err || !res.ok) {
            return reject(err);
          }

          resolve(res.body);

        });
    });
  },

  /**
   * Get a list of favorited movies from out backend API
   */
  getFavorites: function() {
    return new Promise(function(resolve, reject) {
      request
        .get(FAVES_URL + '/favorites')
        .set('Accept', 'application/json')
        .end(function(err, res) {
          if (err || !res.ok) {
            return reject(err);
          }

          resolve(res.body);
        });
    });

  },


  /**
   * save a movie to our favorites.
   * @param movie {object} the movie object to be stored
   */
  addFavorite: function(movie) {
    return new Promise(function(resolve, reject) {
      request
      .post(FAVES_URL + '/favorites')
      .send(movie)
      .end(function(err, res) {
          if (err || !res.ok) {
            return reject(err);
          }

          resolve(res.body);
      });
    });

  }

};
