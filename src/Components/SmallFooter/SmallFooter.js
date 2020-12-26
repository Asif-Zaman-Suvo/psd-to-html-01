import React from 'react';
import './SmallFooter.css';

const SmallFooter = () => {
    return (
        
            <div className='smallFooter container-fluid'>
                <div className='row pt-2'>
                    <div className='col-md-1'></div>
                    <div className='col-md-2'>
                        <p style={{ color: '#8A8A8B' }}>Copyright © 2019 Learned</p>
                    </div>

                    <div className='col-md-2'></div>
                    <div className='col-md-7'>
                      <div className='row'>
                       <p className='pl-4' style={{ color: '#8A8A8B' }}>Site Map</p>
                        <p className='pl-4' style={{ color: '#8A8A8B' }}>Privacy Policy</p>
                        <p className='pl-4' style={{ color: '#8A8A8B' }}>Website Use Policy</p>
                        <p className='pl-4' style={{ color: '#8A8A8B' }}>Cookie Policy</p>
                      </div>


                    </div>


                </div>

            </div>
            
        
    );
};

export default SmallFooter;