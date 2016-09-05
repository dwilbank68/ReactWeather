'use strict';

var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

    getInitialState: function () {
        return {
            isLoading: false
        };
    },


    handleSearch(location){

        this.setState({isLoading: true});

        openWeatherMap.getTemp(location)
            .then(temp=>{
                this.setState({
                    location:location,
                    temp:temp,
                    isLoading:false
                });
            })
            .catch(err=>{
                this.setState({
                    isLoading:false
                });
                alert(err);
            })


    },

    render: function () {


        return (
            <div>
                <h3>Get Weather</h3>
                <WeatherForm    onSearch={this.handleSearch}></WeatherForm>
                {this.renderMessage()}
            </div>
        );
    },

    renderMessage(){

        var {isLoading, temp, location} = this.state;


        if (isLoading){
            return (
                <h3>Fetching weather...</h3>
            )
        }  else if (temp && location){
            return (
                <WeatherMessage location={location}
                                temp={temp}>
                </WeatherMessage>
            )
        }
    }

});

module.exports = Weather;
