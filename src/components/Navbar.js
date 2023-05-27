import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to='/' class="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/Products' class="nav-link active" aria-current="page" href="#">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/Pricelist' class="nav-link active" aria-current="page" href="#">Price List</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/Aboutus' class="nav-link active" aria-current="page" href="#">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/Contactus' class="nav-link active" aria-current="page" href="#">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;