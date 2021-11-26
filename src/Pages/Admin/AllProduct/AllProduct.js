import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../Home/Header/Header';
import UserSiderbar from '../../Shared/UserSiderbar/UserSiderbar';
import AllProducts from '../AllProducts/AllProducts';

const AllProduct = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch('https://serene-lake-64474.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProperties(data));
    }, [])
    return (
        <div>
            <Header></Header>
            <Container>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <UserSiderbar></UserSiderbar>
                    </div>

                    <div className="col-md-8">
                    <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Bed</th>
                                <th scope="col">Bath</th>
                                <th scope="col">Space</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                {
                                    properties.map(property => <AllProducts
                                        key={property._id}
                                        property={property}
                                    ></AllProducts>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AllProduct;