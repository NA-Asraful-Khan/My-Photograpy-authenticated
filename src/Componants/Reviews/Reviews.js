import React, { useEffect, useState } from 'react';
import useReviewData from '../../customhook/ReviewData';
import Review from '../Review/Review';
import './Review.css'

const Reviews = () => {
    
    const [reviews, setReview] = useReviewData();
    return (
        <div className='review-container'>
            {
                reviews.map(review=><Review
                        key={review._id}
                        review={review}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;


{/* <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div> */}