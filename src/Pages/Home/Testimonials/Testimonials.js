import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons';
import './Testimonials.css'

const Testimonials = ({review}) => {
    const {name,img,ratting,description} = review;
    const star = <FontAwesomeIcon icon={faStar} />

    return (
        <div className="col-md-4">
            <div className="single-testimonial">
                <div className="thumb">
                    <img src={img} alt=""/>
                </div>
                <div>

                     {star} {star} {star} {star} {star}
                </div>
                <div className="content mt-2">
                    <h4>{name}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;