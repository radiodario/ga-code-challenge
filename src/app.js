const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const Main = require('./components/main');
const Search = require('./components/searchbox');
const MovieDetails = require('./components/movieDetails');
const Favorites = require('./components/favorites');

// We use react-router to define routes for our application.
// We then give them to ReactDOM to render them onto our webpage
// We specify a Main route that renders the `main` component onto the page
// and inside of them we add routes for both our list of favorites,
// our movie details and finally Search as a default route
ReactDOM.render((
  <Router>
    <Route component={Main}>
      <Route path="/movies/:imdbID" component={MovieDetails}/>
      <Route path="/favorites" component={Favorites}/>
      <Route path="*" component={Search}/>
    </Route>
  </Router>
  ), document.getElementById('app')
);
