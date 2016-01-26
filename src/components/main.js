const React = require('react');
const Link = require('react-router').Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div className="app">
        <div className="header">
          <h1 className="header__title">General Assembly Movie Search Engine</h1>
          <ul className="header__links">
            <li><Link to={'/search'}>Search</Link></li>
            <li><Link to={'/favorites'}>Favorites</Link></li>
          </ul>
        </div>
        <div className="main">
          {this.props.children}
        </div>
      </div>
    );
  }
});
