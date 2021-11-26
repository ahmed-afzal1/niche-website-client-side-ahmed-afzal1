import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faHeart} from '@fortawesome/free-solid-svg-icons'
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import Properties from '../../Pages/Home/Properties/Properties';

const Explore = () => {
    const MapMarkedAlt = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const heart = <FontAwesomeIcon icon={faHeart} />

    const [properties, setProperties] = useState([])
    useEffect(() => {
        fetch('https://serene-lake-64474.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProperties(data));
    }, [])

    return (
        <div>
            <Header></Header>

            <div className="property">
            <Container>
                <div className="row mb-5">
                    {
                        properties.map(property=><Properties key={property._id} property={property}></Properties>)
                    }
                </div>
            </Container>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default Explore;