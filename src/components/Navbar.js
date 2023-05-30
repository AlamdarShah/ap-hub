import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass1, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <img className='logo-img' src='ap-hub.png' alt='logo-img'></img>
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <a  className="nav-link" href="#" >Products</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" ></a>
                            <ul className="dropdown-menu">
                                <li><Link to="/Spices" className="dropdown-item" >Spices</Link></li>
                                <li><Link to="/Pulses" className="dropdown-item" >Pulses</Link></li>
                                <li><Link to="/More" className="dropdown-item" >More</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/Contactus" className="nav-link" >Contact US</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Aboutus" className="nav-link">About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar;