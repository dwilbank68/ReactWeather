//var React = require('react');
//var ReactDOM = require('react-dom');
//var {Route, Router, IndexRoute, hashHistory} = require('react-router');
//var Main = require('Main');
//var Weather = require('Weather');
//var About = require('About');
//var Examples = require('Examples');

import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!applicationStyles');


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}></Route>
            <Route path="examples" component={Examples}></Route>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
