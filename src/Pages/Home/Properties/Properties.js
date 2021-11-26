import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faHeart} from '@fortawesome/free-solid-svg-icons'
import './Properties.css'

const Properties = (props) => {
    const {name,price,location,bed,bath,space,img,_id} = props.property;

    const MapMarkedAlt = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const heart = <FontAwesomeIcon icon={faHeart} />
    return (
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
                <div className="card">
                    <img className="card-img-top" src={img} alt="" />
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12 ms-0">
                                    <h5 className="card-title card-top-section"><span>${price}</span></h5>
                                </div>

                                <div className="col-lg-6 col-md-6 col-12 me-0">
                                    <h5 className="card-title card-top-section">{heart}</h5>
                                </div>
                            </div>

                            <h5 className="booking-name">{name}</h5>
                            <p className="location">{MapMarkedAlt} {location}</p>
                            <div className="row attribute">
                                <div className="col-md-4">
                                    <p>Beds: {bed}</p>
                                </div>

                                <div className="col-md-4">
                                    <p>Baths: {bath}</p>
                                </div>

                                <div className="col-md-4">
                                    <p>Sq: {space} sqft</p>
                                </div>
                            </div>
                            <p className="card-text mt-4"><Link to={`/purchase/${_id}`}><button className="btn booking-btn">Purchase Now</button></Link></p>
                        </div>
                </div>
            </div>
    );
};

export default Properties;