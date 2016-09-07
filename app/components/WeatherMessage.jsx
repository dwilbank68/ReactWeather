import React from 'react';

const WeatherMessage = (props) => {
    return (
        <div>
            <h3 className="text-center">It's {props.temp} in {props.location}!</h3>
        </div>
    );
};

//module.exports = WeatherMessage;
export default WeatherMessage;