import React from 'react';
import './CourseCard.css'

const CourseCard = ({cd}) => {
    return (
      
            <div className='col-md-3 pt-5'>
            <div class="card border-0 shadow mb-5 bg-white rounded" style={{width:'16em',height:'20em'}}>
                        <img class="card-img-top" src={cd.img} alt="Card image cap" />
                        <div class="card-body">
                            <h6 class="card-title cardText">{cd.description}</h6>
                            <p className="card-text departmentParagraph ">{cd.name}</p>
                            
                            <a href="#">Keep Reading....</a>
                        </div>
                    </div>
            </div>
         
      
    );
};

export default CourseCard;