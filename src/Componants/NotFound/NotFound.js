import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFound pd'>
            <img src="https://cdn-icons-png.flaticon.com/512/755/755064.png" alt="" />
            <h2>This page is outside of the Universe</h2>
            <h3>The page you are trying to access does not exist or has been moved.</h3>
            <h3>Try going back to our homepage.</h3>
            <Link to="/Home">Home</Link>

        </div>
    );
};

export default NotFound;