import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../contexts/useAuth';
import Header from '../../Home/Header/Header';
import MyOrders from '../MyOrders/MyOrders';
import UserSiderbar from '../../Shared/UserSiderbar/UserSiderbar';

const MyOrder = () => {
    const [carts, setCarts] = useState([]);
    const { user } = useAuth();
    const email = user.email;

    useEffect(() => {
        const url = `https://serene-lake-64474.herokuapp.com/orders/${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCarts(data));
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
                    <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Order Author</th>
                                <th scope="col">Bed</th>
                                <th scope="col">Bath</th>
                                <th scope="col">Space</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                {
                                    carts.map(cart => <MyOrders
                                        key={cart._id}
                                        cart={cart}
                                    ></MyOrders>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MyOrder;