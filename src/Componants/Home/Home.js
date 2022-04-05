import React from 'react';
import { Link } from 'react-router-dom';
import HomeBottom from '../HomeBottom/HomeBottom';
import HomeTop from '../HomeTop/HomeTop';
import './Home.css'

const Home = () => {
    return (
        <div className='pd'>
            <HomeTop></HomeTop>
            <HomeBottom>
                <div className='reviewDiv'>
                    <Link className='reviewButton' to="/Reviews">Reviews</Link>
                </div>
            </HomeBottom>
        </div>
    );
};

export default Home;