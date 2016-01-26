const React = require('react');
const Link = require('react-router').Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div className="app">
        <h1>General Assembly Movie Search Engine</h1>
        <div className="main">
          {this.props.children}
        </div>
      </div>
    );
  }
});
