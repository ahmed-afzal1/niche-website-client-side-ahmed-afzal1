import React from 'react';
import { Button,Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import logo from '../../../images/logo.png'
import './Header.css'
import useAuth from '../../../contexts/useAuth';

const Header = () => {
    const signInIcon = <FontAwesomeIcon icon={faSignInAlt} />
    const { user, logout } = useAuth();

    return (
        <div>
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light" sticky="top">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="" className="logo"/> <span className="font-weight-bold ms-2">FindHouse</span>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to="/" className="link">Home</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/explore" className="link">Explore</NavLink>
                                </li>

                                {user?.email ?
                                    <li className="nav-item">
                                        <NavLink to="/dashboard" className="common-btn">Dashboard</NavLink>
                                    </li>
                                    :
                                    ''
                                }

                                <li>
                                    {user?.email ?
                                        <Button onClick={logout} className="ms-5 me-2 common-btn">Logout</Button> :
                                        <NavLink to="/login" className="ms-5 me-2 common-btn">{signInIcon} Login/Register</NavLink>
                                        
                                    }

                                    {
                                        user?.email &&
                                        <Navbar.Text>
                                            Signed in as: <a href="#login">{user?.displayName}</a>
                                        </Navbar.Text> 
                                    }
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;