import React from 'react';
import useReviewData from '../../customhook/ReviewData';
import Review from '../Review/Review';
import './HomeBottom.css'

const HomeBottom = (props) => {
    const [reviews, setReview] = useReviewData();
    const slicing = reviews.slice(0, 3);
    return (
        <div className='home-bottom'>
            <h2>Reviews({slicing.length})</h2>
            <div className='review-container'>
                {
                    slicing.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
            {props.children}
        </div>
    );
};

export default HomeBottom;