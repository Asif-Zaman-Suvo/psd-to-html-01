import React from 'react';
import './Departments.css';
import orange from '../../Images/orange.png';
import green from '../../Images/green.png';
import yellow from '../../Images/yellow.png';

const Departments = () => {
    return (
        <div className='container'>
            <div class="card-deck mt-5">
                <div class="card">
                    <img style={{width:'348px',height:'330px'}} class="card-img-top" src={orange} alt="Card image cap" />

                    <h2 className='cardDescription'>Online Education</h2>
                    
                </div>
                <div class="card">
                    <img style={{width:'348px',height:'330px'}} class="card-img-top" src={green} alt="Card image cap" />
                    <h2 className='cardDescription'>Online Education</h2>
                   
                </div>
                <div class="card">
                    <img style={{width:'348px',height:'330px'}} class="card-img-top" src={yellow} alt="Card image cap" />
                    <h2 className='cardDescription'>Online Education</h2>
                   
                </div>
            </div>

           

        </div>

       

       
        
    );
};

export default Departments;