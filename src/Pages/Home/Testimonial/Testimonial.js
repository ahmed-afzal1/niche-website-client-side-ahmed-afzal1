import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Testimonials from '../Testimonials/Testimonials';
import './Testimonial.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://serene-lake-64474.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className="testimonial">
            <h2 className="mb-2">Testimonials</h2>
            <Container>
                <div className="row">
                    {
                        reviews.map(review =><Testimonials key={review._id} review={review}></Testimonials>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Testimonial;