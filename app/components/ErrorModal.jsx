import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

const ErrorModal = React.createClass({

    componentDidMount() {
        var {title, message} = this.props;

        var modalMarkup = (
            <div    id="error-modal"
                    className="reveal tiny text-center"
                    data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">
                        Okay
                    </button>
                </p>
            </div>
        );

        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },

    getDefaultProps() {
        return {
            title: 'Error'
        };
    },

    propTypes: {
        title:React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },

    render() {

        return (
            <div></div>
        );
    }
});


export default ErrorModal;
