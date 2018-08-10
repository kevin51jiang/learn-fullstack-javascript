import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

const Header = ({ message }) => {
    return (
        <h2 align="center" className="Header text-center">
            {message}
        </h2>
    );
};

Header.propTypes = {
    message: PropTypes.string.isRequired
};


const App = (props) => {
    return (
        <div className="App">
            <Header message="Naming Contests" />
            <div>

            </div>
        </div>
    );
};




ReactDOM.render(
    <App />,
    document.getElementById('root')
);