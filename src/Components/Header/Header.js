import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import './Header.css';

const Header = () => {
    return (
        <div className='container-fluid header-bg'>
            <MenuBar></MenuBar>

            <div className='row pl-5'>
                <div className='col-md-6 pl-5 pt-5'>
                    <h1 className='headerLine pl-5 pt-5'>Innovation for education<br></br>
                    and society
                    
                    
                    </h1>

                    <p className='headerParagraph pl-5'>Our interdisciplinary majors and minor means you can chart your own course for academic success</p>
                    

                </div>
                <div className='col-md-6 pr-3'></div>

            </div>

            <div className='row pl-5'>
                <div className='col-md-4 pl-5 pt-2'>
                <button className='ml-5 campusButton'>Visit Our Campus</button>
                </div>

                <div className='col-md-8'></div>
            </div>
            
        </div>
    );
};

export default Header;