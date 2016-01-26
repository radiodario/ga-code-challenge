const request = require('superagent');

const OMDBAPI_URL = 'http://www.omdbapi.com/';


module.exports = {
  performSearch: function(query) {
    return new Promise(function(resolve, reject) {
      request
        .get(OMDBAPI_URL)
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
        .get(OMDBAPI_URL)
        .query({i: imdbID})
        .set('Accept', 'application/json')
        .end(function(err, res) {
          if (err || !res.ok) {
            return reject(err);
          }

          resolve(res.body);

        });
    });
  }

};
