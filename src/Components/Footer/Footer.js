import React from 'react';
import './Footer.css';
import footerLogo from '../../Images/footerLogo2.png'


const Footer = () => {
    return (
        <div className='footer container-fluid'>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-2 pt-5'>
                <img src={footerLogo} alt="" />
                </div>
                <div className='col-md-2'></div>
                <div className='col-md-2'></div>
                <div className='col-md-2'></div>
                <div className='col-md-2'></div>



            </div>
            
        </div>
    );
};

export default Footer;