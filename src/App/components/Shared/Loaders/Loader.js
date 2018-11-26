import React from 'react';

const Loader = ({text}) => {
    return (
        <div>
            <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
            {text}
        </div>
    );
};

export default Loader;
