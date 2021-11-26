import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Property.css'
import Properties from '../Properties/Properties';

const Property = () => {

    const [properties, setProperties] = useState([])
    useEffect(() => {
        fetch('https://serene-lake-64474.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProperties(data.slice(0,3)));
    }, [])

    return (
        <div className="property">
            <Container>
                <h3>Featured Properties</h3>
                <p>Handpicked properties by our team.</p>
                <div className="row mb-5">
                    {
                        properties.map(property=><Properties key={property._id} property={property}></Properties>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Property;