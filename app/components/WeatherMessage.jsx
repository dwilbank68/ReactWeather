//'use strict';
//
//var React = require('react');
//
//var WeatherMessage = React.createClass({
//    render: function () {
//        return (
//            <div>
//            </div>
//        );
//    }
//});
//
import React from 'react';

const WeatherMessage = (props) => {
    return (
        <div>
            <p>It's {props.temp} in {props.location}!</p>
        </div>
    );
};

module.exports = WeatherMessage;
