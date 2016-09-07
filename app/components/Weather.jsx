'use strict';

import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

var Weather = React.createClass({

    componentDidMount() {
        var location = this.props.location.query.location;
        if (location && location.length > 0){
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },

    componentWillReceiveProps(nextProps, nextContext) {
        var location = nextProps.location.query.location;
        if (location && location.length > 0){
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },

    getInitialState: function () {
        return {
            isLoading: false
        };
    },


    handleSearch(location){
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });

        openWeatherMap.getTemp(location)
            .then(temp=> {
                this.setState({
                    location: location,
                    temp: temp,
                    isLoading: false
                });
            })
            .catch(err=> {
                this.setState({
                    isLoading: false,
                    errorMessage: err.message
                });
            })


    },

    render: function () {
        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}></WeatherForm>
                {this.renderMessage()}
                {this.renderError()}
            </div>
        );
    },

    renderError(){
        var {errorMessage} = this.state;

        if (typeof errorMessage === 'string'){
            return (
                <ErrorModal message={errorMessage}/>
            )
        }
    },

    renderMessage(){
        var {isLoading, temp, location} = this.state;

        if (isLoading) {
            return (
                <h3 className="text-center">Fetching weather...</h3>
            )
        } else if (temp && location) {
            return (
                <WeatherMessage location={location}
                                temp={temp}>
                </WeatherMessage>
            )
        }
    }

});

export default Weather;
