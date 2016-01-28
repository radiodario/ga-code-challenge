const React = require('react');
const Link = require('react-router').Link;

// This is our main component, which wraps the other child components.
// inside the main div, we pass the `children` property which is populated
// by react-router with the component that matches our current route.
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
