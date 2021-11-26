import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope,faStreetView} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Footer = () => {
    const Phone = <FontAwesomeIcon icon={faPhone} />
    const Envelope = <FontAwesomeIcon icon={faEnvelope} />
    const StreetView = <FontAwesomeIcon icon={faStreetView} />

    return (
        <div className="footer-area">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="widget-info mb-3">
                        <h5>About Site</h5>
                    </div>
                    <div className="footer-info">
                        <p className="">We’re reimagining how you buy, sell and rent. It’s now easier to get into a place you love. So let’s do this, together.</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="widget-info">
                        <h5>Contact us</h5>
                    </div>
                    <div className="contact-box">
                        <span className="text-danger me-2">
                            {Phone}
                        </span>
                        <div>
                            <Link to="tel" className="text-white">+01852-1265122 <br/>+01852-1265122</Link>
                        </div>
                    </div>

                    <div className="contact-box">
                        <span className="text-danger ">
                            {Envelope}
                        </span>
                        <div>
                            <Link to="/" className="text-white">info@example.com <br/>support@example.com</Link>
                        </div>
                    </div>

                    <div className="contact-box">
                        <span className="text-danger me-2">
                            {StreetView}
                        </span>
                        <div>
                            <Link to="/" className="text-white">2752 Willison Street <br/>Eagan, United State</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="widget-info mb-3">
                        <h5>Support</h5>
                    </div>
                    <div className="category-list">
                        <ul>
                            <li>Contact us</li>
                            <li>About us</li>
                            <li>Destinations</li>
                            <li>Our Blogs</li>
                            <li>Package</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;