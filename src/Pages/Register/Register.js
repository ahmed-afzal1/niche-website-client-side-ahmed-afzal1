import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import useAuth from '../../contexts/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return false;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div>
            <Header></Header>
            <Container>
                <div className="row mt-5">
                    <div className="col-md-7 form-side">
                        <h3 className="mb-2">Register</h3>
                        {
                        isLoading && <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        }
                        {
                        user?.email && 
                            <div className="alert alert-success" role="alert">
                             User Created successfully!
                           </div>
                        }

                        {authError && 
                            <div className="alert alert-danger" role="alert">
                                {authError}
                            </div>
                        }

                        <form onSubmit={handleLoginSubmit}>
                            <div className="mb-3">
                                <input type="text" onBlur={handleOnBlur} name="name" className="form-control" placeholder="Enter Name"/>
                            </div>

                            <div className="mb-3">
                                <input type="email" name="email" onBlur={handleOnBlur} className="form-control" aria-describedby="emailHelp" placeholder="Enter Email"/>
                            </div>

                            <div className="mb-3">
                                <input type="password" name="password" onBlur={handleOnBlur} className="form-control p-2" placeholder="Enter Password"/>
                            </div>

                            <div className="mb-3">
                                <input type="password" name="password2" onBlur={handleOnBlur} className="form-control p-2" placeholder="Re Type Password"/>
                            </div>
                            
                            <button type="submit" className="btn btn-primary btn-color">Register</button>
                            <p className="mt-2">
                            <Link to="/login">Already Have an Account?</Link>
                            </p>
                        </form>
                    </div>

                    <div  className="col-md-5">
                        <img src="https://findhouse.bookingcore.org/images/resource/login.jpg" alt=""/>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Register;