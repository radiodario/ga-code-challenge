var React = require('react');
var Link = require('react-router').Link;
var movieDataApi = require('../movieDataApi');

// This element renders a single search result
// and is used both by our favorites view and
// our search view.
module.exports = React.createClass({

  render : function() {
    const imdbID = this.props.imdbID;
    const imdbURL = 'http://www.imdb.com/title/' + imdbID + '/';
    return (
      <div className="search-result">
        <div className="search-result__img">
          <img src={this.props.Poster} />
        </div>
        <div className="search-result__body">
          <h3 className="search-result__body__title">
            <Link to={'/movies/' + imdbID}>
              {this.props.Title}
            </Link>
          </h3>
          <p className="search-result__body__details">
            <span className="search-result__body__details__year">
              {'Year: ' + this.props.Year}
            </span>
            <span className="search-result__body__details__imdblink">
              <a
                target={'blank'}
                href={imdbURL}
              >
                View on IMDB
              </a>
            </span>
          </p>
        </div>
      </div>
    );
  }
});
