import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Property from '../Property/Property';
import Footer from '../Footer/Footer';
import Partner from '../Partner/Partner';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';
import City from '../City/City';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Property></Property>
            <City></City>
            <Service></Service>
            <Testimonial></Testimonial>
            <Partner></Partner>
            <Footer></Footer>
        </div>
    );
};

export default Home;