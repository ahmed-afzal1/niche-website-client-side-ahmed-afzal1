import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../contexts/useAuth';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import './Login.css'


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <div>
            <Header></Header>
            <Container>
                <div className="row mt-5">
                    <div className="col-md-5">
                        <img src="https://findhouse.bookingcore.org/images/resource/login.jpg" alt=""/>
                    </div>

                    <div className="col-md-7 form-side">
                        <h3 className="mb-2">Login</h3>
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
                             Login Successfully
                           </div>
                        }

                        {authError && 
                            <div className="alert alert-danger" role="alert">
                                {authError}
                            </div>
                        }
                        <form onSubmit={handleLoginSubmit}>
                            <div className="mb-3">
                                <input type="email"  onChange={handleOnChange} name="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter Email"/>
                            </div>

                            <div className="mb-3">
                                <input type="password" onChange={handleOnChange} name="password" className="form-control p-2" placeholder="Enter Password"/>
                            </div>
                            
                            <button type="submit" className="btn btn-primary btn-color">Log In</button>
                            <p className="mt-2">
                            <Link to="/register">Don,t Have Account?</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Login;