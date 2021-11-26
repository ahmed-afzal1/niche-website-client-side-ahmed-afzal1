import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Partner.css'

const Partner = () => {
    return (
        <div className="partner">
            <Container>
                <div className="row">
                    <div className="col-md-8">
                        <h3>Become a Real Estate Agent</h3>
                        <p>We only work with the best companies around the globe</p>
                    </div>

                    <div className="col-md-4 mt-3">
                        <Link to="/" className="register-link">Register Now</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Partner;