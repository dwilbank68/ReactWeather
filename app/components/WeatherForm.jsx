import React from 'react';

var WeatherForm = React.createClass({

    onFormSubmit: function(e){
        e.preventDefault();
        var location = this.refs.location.value;
        if (location.length > 0){
            this.refs.location.value = '';
            this.props.onSearch(location); // function on the parent
        }
    },

    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="search" ref="location" placeholder="Search weather by city"/>
                    <button className="button expanded hollow">Get Weather</button>
                </form>
            </div>
        );
    }
});

export default WeatherForm;
