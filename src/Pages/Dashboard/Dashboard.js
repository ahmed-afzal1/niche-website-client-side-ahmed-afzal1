import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../contexts/useAuth';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import UserSiderbar from '../Shared/UserSiderbar/UserSiderbar';
import './Dashboard.css'

const Dashboard = () => {
    const { user } = useAuth();
    const email = user.email;

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const url = `https://serene-lake-64474.herokuapp.com/orders/${email}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    const [properties, setProperties] = useState([])
    useEffect(() => {
        fetch('https://serene-lake-64474.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProperties(data));
    }, [])

    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        const url = `https://serene-lake-64474.herokuapp.com/orders/${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data));
    }, [email])
    return (
        <div>
            <Header></Header>
            <Container>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <UserSiderbar></UserSiderbar>
                    </div>

                    <div className="col-md-8">
                        <div className="row">
                            {
                                user?.email === 'admin@gmail.com' &&  
                                <div className="col-md-6">
                                    <div className="card reviews shadow-sm">
                                        <h4>
                                            {properties.length} Products
                                        </h4>
                                    </div>
                                </div>
                            }

                            {
                                user?.email !== 'admin@gmail.com' && 
                                <div className="col-md-6">
                                    <div className="card reviews shadow-sm">
                                        <h4>
                                            {reviews.length} Reviews
                                        </h4>
                                    </div>
                                </div>
                            }


                            {
                                user?.email !== 'admin@gmail.com' && 
                                <div className="col-md-6">
                                    <div className="card reviews shadow-sm">
                                    <h4>
                                            {myOrders.length} Orders
                                    </h4>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;