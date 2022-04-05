import React from 'react';
import './Review.css';

const Review = ({review}) => {
    const {name, picture,ratings,reviews} = review;
    return (
        <div className='review-item'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <blockquote>"{reviews}" - <span><i>{name}</i></span></blockquote>
            <h4>Rating: {ratings} Star</h4>
        </div>
    );
};

export default Review;