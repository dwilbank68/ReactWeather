//'use strict';
//
//var React = require('react');
//var {IndexLink, Link} = require('react-router');
//
//var Nav = React.createClass({
//    render: function () {
//        return (
//            <div>
//                <h2>Nav Component</h2>
//                <IndexLink to="/"           activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//                <Link to="/about"           activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//                <Link to="/examples"        activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//            </div>
//        );
//    }
//});

import React from 'react';
import {IndexLink, Link} from 'react-router';

const Nav = (props) => {
    return (
        <div>
            <h2>Nav Component</h2>
            <IndexLink to="/"           activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            <Link to="/about"           activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            <Link to="/examples"        activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
        </div>

    );
};

module.exports = Nav;