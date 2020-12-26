import React from 'react';
import './Footer.css';
import footerLogo from '../../Images/footerLogo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedinIn, faSkype, faPinterest, faApple } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div className='footer container-fluid'>
            <div className='row'>
                <div className='col-md-1'></div>
                <div className='col-md-2 pt-5'>
                    <img src={footerLogo} alt="" />

                    <p style={{ color: '#8A8A8B' }} className='pt-3'>Edumodo focuses on creating magnificent education websites with ease.Take the lead in the race with Learned</p>

                    <hr className='hrline'></hr>

                    <div className='row'>
                        <div className='icons p-2'> <FontAwesomeIcon icon={faTwitter} /></div>
                        <div className='icons p-2'> <FontAwesomeIcon icon={faLinkedinIn} /></div>

                        <div className='icons p-2'> <FontAwesomeIcon icon={faFacebook} /></div>
                        <div className='icons p-2'> <FontAwesomeIcon icon={faSkype} /></div>

                        <div className='icons p-2'> <FontAwesomeIcon icon={faPinterest} /></div>

                        <div className='icons p-2'> <FontAwesomeIcon icon={faApple} /></div>

                    </div>
                </div>
                <div className='offset-md-1 col-md-3 pt-5'>
                    <h6 style={{ color: 'white' }}>FEATURED PROGRAMS</h6>


                    <div className='row pt-4'>
                        <p style={{ color: '#8A8A8B' }}>Fixed Responsive Issue <span>-just now</span></p>
                        <p style={{ color: '#8A8A8B' }}>New Portfolio Grid Layout <span>-today</span></p>
                        <p style={{ color: '#8A8A8B' }}>Tested and approved WP 3.6 <span>-5 hours ago</span></p>
                        <p style={{ color: '#8A8A8B' }}>Fixed Google Map Issue <span>-Yesterday</span></p>

                    </div>


                </div>
                <div className='col-md-1 pt-5'>
                    <h6 className='text-white'>LEARNING</h6>
                    <div className='row pl-3 pt-4'>
                        <p style={{ color: '#8A8A8B' }}>Our Plans</p>
                        <p style={{ color: '#8A8A8B' }}>Free Trial</p>
                        <p style={{ color: '#8A8A8B' }}>Academic Solution</p>
                        <p style={{ color: '#8A8A8B' }}>Business Solution</p>
                    </div>
                </div>
                <div className='offset-md-1 col-md-2 pt-5'>
                    <h6 className='text-white'>SUPPORT FORUM</h6>
                    <div className='row pt-4'>
                        <p style={{ color: '#8A8A8B' }}>Write your email into below field to join our quick support forum</p>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <div class="input-group-append">
                                <button className='footerButton' type="button" id="button-addon2">GET HELP</button>
                            </div>
                        </div>

                    </div>


                </div>
                <div className='col-md-1'></div>



            </div>

        </div>
    );
};

export default Footer;