var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hasHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var About = require('../components/About');

var routes = (
    <Router history={hasHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <About path="/about" component={About}/>
        </Route>
    </Router>
);

module.exports = routes;