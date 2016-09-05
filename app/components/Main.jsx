//'use strict';
//
//var React = require('react');
//var Nav = require('Nav');

//var Main = React.createClass({
//    render: function () {
//        return (
//            <div>
//                <Nav></Nav>
//                <h2>Main Component</h2>
//                {this.props.children}
//            </div>
//        );
//    }
//});
//

import React from 'react';
import Nav from 'Nav';

const Main = (props) => {
    return (
        <div>
            <Nav></Nav>
            <h2>Main Component</h2>
            {props.children}
        </div>
    );
};

module.exports = Main;
