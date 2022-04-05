import { useEffect, useState } from "react";

const useReviewData =()=>{

    const [reviews, setReview] = useState([]);
    useEffect(()=>{
        fetch('ReviewData.json')
        .then(res=> res.json())
        .then(data => setReview(data))
    }, []);

    return[reviews, setReview];
}

export default useReviewData;