import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCalculator} from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap';
import './Service.css'

const Service = () => {
    const phone = <FontAwesomeIcon icon={faHome} />
    const calculator = <FontAwesomeIcon icon={faCalculator} />
    return (
        <div className="service">
            <Container>
                <div className="row">
                    <div className="col-md-6 col-lg-4 col-xl-4">
                        <Link to="#" className="btn btn-default w100">
                            <div className="single-service">
                                <div className="icon">
                                    {phone}
                                </div>
                                <div className="details mt-2">
                                    <h5>Trusted By Thousands</h5>
                                    <p className="mt-2">The place Bashundhara R-A comes to our mind and what we can picture is the area holding the most inhabitant.</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-6 col-lg-4 col-xl-4">
                        <Link to="#" className="btn btn-default w100">
                            <div className="single-service">
                                <div className="icon">
                                    {calculator}
                                </div>
                                <div className="details mt-2">
                                    <h5>Financing Made Easy</h5>
                                    <p className="mt-2">Now Bashundhara R-A is proposing one of the best deals for your new home. The corresponding unit.</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-6 col-lg-4 col-xl-4">
                        <Link to="#" className="btn btn-default w100">
                            <div className="single-service">
                                <div className="icon">
                                    {phone}
                                </div>
                                <div className="details mt-2">
                                    <h5>Wide Renge Of Properties</h5>
                                    <p className="mt-2">You would get a taste of elite as soon as you enter the drawing room for your leisure hours. </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Service;