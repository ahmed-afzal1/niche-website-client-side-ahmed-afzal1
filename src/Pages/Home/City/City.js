import React from 'react';
import { Container } from 'react-bootstrap';
import './City.css';


const City = () => {
    return (
        <div className="city">
            <div className="card shadow-sm p-3 mb-5 bg-white rounded city-main-area">
                <Container>
                    <h3>Find Properties in These Cities</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <div className="city-content">
                        <div className="row">
                            <div className="col-md-4 col-sm-12 col-12">
                                <img src="https://findhouse.bookingcore.org/uploads/demo/location/location-1.jpg" alt="" className="img-fluid"/>
                            </div>

                            <div className="col-md-8 col-sm-12 col-12">
                                <img src="https://findhouse.bookingcore.org/uploads/demo/location/location-2.jpg" alt="" className="img-fluid"/>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md-8 col-sm-12 col-12">
                                <img src="https://findhouse.bookingcore.org/uploads/demo/location/location-3.jpg" alt="" className="img-fluid"/>
                            </div>

                            <div className="col-md-4 col-sm-12 col-12">
                                <img src="https://findhouse.bookingcore.org/uploads/demo/location/location-4.jpg" alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default City;