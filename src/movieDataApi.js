const request = require('superagent');

const OMDBAPI_URL = 'http://www.omdbapi.com';
const FAVES_URL = 'http://localhost:3000';

module.exports = {
  performSearch: function(query) {
    return new Promise(function(resolve, reject) {
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
