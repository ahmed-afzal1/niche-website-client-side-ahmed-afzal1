import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../../images/avatar.jpg';
import useAuth from '../../../contexts/useAuth';
import { Button } from 'react-bootstrap';

const UserSiderbar = () => {
    const { user,logout,admin } = useAuth();
    return (
        <div className="card" style={{width: '18rem'}}>
        <img src={avatar} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{ (user?.email ? user.email : '')}</h5>
        </div>
        <ul className="list-group list-group-flush sidebar">
            {
                user?.email === 'admin@gmail.com' || admin ? <li className="list-group-item"><Link to="/all-orders">Manage All Orders</Link></li> : ''
            }

            {
                user?.email === 'admin@gmail.com' || admin ? <li className="list-group-item"><Link to="/all-products">Manage Products</Link></li> : ''
            }

            {
                user?.email === 'admin@gmail.com' || admin ? <li className="list-group-item"><Link to="/add-product">Add A Product</Link></li> : ''
            }

            {
                user?.email === 'admin@gmail.com' ? <li className="list-group-item"><Link to="/make-admin">Make Admin</Link></li> : ''
            }
            
            {
                user?.email !== 'admin@gmail.com' ? <li className="list-group-item"><Link to="/pay">Pay</Link></li> : ''
            }
            
            {
                user?.email !== 'admin@gmail.com' ? <li className="list-group-item"><Link to="/my-orders">My Orders</Link></li> : ''
            }

            {
                user?.email !== 'admin@gmail.com' ? <li className="list-group-item"><Link to="/add-reviews">Review</Link></li> : ''
            }

            <li className="list-group-item"><Button onClick={logout} className="ms-5 me-2 common-btn">Logout</Button></li>
        </ul>
    </div>
    );
};

export default UserSiderbar;