import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../Home/Header/Header';
import UserSiderbar from '../../Shared/UserSiderbar/UserSiderbar';
import card from '../../../images/card.jpg';
import './Pay.css'

const Pay = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <UserSiderbar></UserSiderbar>
                    </div>

                    <div className="col-md-8 pay-content">
                        <img src={card} alt="" className="img-fluid w-50"/>
                        <p className="mt-2">Payment system coming soon...</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Pay;