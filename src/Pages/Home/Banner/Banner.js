import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="banner-content">
                    <div className="row banner-main">
                        <div className="col-lg-12 content-area">
                            <h2>Find Your Dream Home</h2>
                        </div>

                        <div className="col-lg-12 btn-area">
                            <div className="banner-btn"><a className="btn-common btn-buy" href="/home">Buy</a></div>
                            <div className="banner-btn"><a className="btn-rent" href="/home">Rent</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;