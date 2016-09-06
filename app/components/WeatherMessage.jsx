import React from 'react';

const WeatherMessage = (props) => {
    return (
        <div>
            <p>It's {props.temp} in {props.location}!</p>
        </div>
    );
};

//module.exports = WeatherMessage;
export default WeatherMessage;