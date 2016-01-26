var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({

  addToFavorites: function() {
    console.log('added!');
  },

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
            <span className="search-result__body__details__addtofaves">
              <a
                href={'#'}
                onClick={this.addToFavorites}
              >
                Add to favorites
              </a>
            </span>
          </p>
        </div>
      </div>
    );
  }
});
