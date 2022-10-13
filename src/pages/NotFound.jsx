import React from 'react';
import '@styles/NotFound.scss';
import error404 from '@images/error404.png';

const NotFound = () => {
    return (
        <figure className = "error404container">
            <img className = "error404img" src={error404} />
        </figure>
    );
};

export default NotFound;