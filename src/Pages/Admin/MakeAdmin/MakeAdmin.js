import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../contexts/useAuth';
import Header from '../../Home/Header/Header';
import UserSiderbar from '../../Shared/UserSiderbar/UserSiderbar';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://serene-lake-64474.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <Header></Header>
            <Container>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <UserSiderbar></UserSiderbar>
                    </div>

                    <div className="col-md-8">
                        <h2 className="mb-2">Make Admin</h2>
                        {
                        success && 
                            <div className="alert alert-success" role="alert">
                             Data Updated Successfully
                           </div>
                        }
                        <form onSubmit={handleAdminSubmit}>
                            <div className="mb-3">
                                <input type="email" onBlur={handleOnBlur} name="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter Email"/>
                            </div>
                            
                            <button type="submit" className="btn btn-primary btn-color">Make</button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MakeAdmin;