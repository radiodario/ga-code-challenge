const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const Main = require('./components/main');
const Search = require('./components/searchbox');
const MovieDetails = require('./components/movieDetails');

ReactDOM.render((
  <Router>
    <Route component={Main}>
      <Route path="/movies/:imdbID" component={MovieDetails}/>
      <Route path="*" component={Search}/>
    </Route>
  </Router>
  ), document.getElementById('app')
);
