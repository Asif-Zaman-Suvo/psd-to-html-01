import React from 'react';
import './MenuBar.css';
import logo from '../../Images/logo.png';

const MenuBar = () => {
    return (
        <div className='container'>
            <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-transparent">
                <img src={logo} alt=""/>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mr-5 py-3">
                        <li class="nav-item active p-2">
                            <a class="nav-link" href="#">Study</a>
                        </li>
                        <li class="nav-item active p-2">
                            <a class="nav-link" href="#">About Us</a>
                        </li>
                        <li class="nav-item active p-2">
                            <a class="nav-link" href="#">Admission</a>
                        </li>
                       
                        <li class="nav-item active p-2">
                            <a class="nav-link" href="#">Pages</a>
                        </li>
                        <li class="nav-item active p-2">
                            <a class="nav-link" href="#">News</a>
                        </li>
                        <li class="nav-item active p-2">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                       
                       
                       
                    </ul>
                    <form class="form-inline my-2 my-lg-0 ml-3">
                       
                        <button class="navButton my-2 my-sm-0" type="submit">Apply Now</button>
                    </form>
                </div>
            </nav>

        </div>
    );
};

export default MenuBar;