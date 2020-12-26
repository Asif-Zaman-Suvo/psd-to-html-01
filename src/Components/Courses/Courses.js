import React from 'react';
import CourseCard from '../CourseCard/CourseCard';
import './Courses.css';
import CoursesData from './CoursesData';

const Courses = () => {
    return (
        <div className='course-bg'>

            <div className='container'>
                <div className='row'>

                    {
                        CoursesData.map((cd)=><CourseCard cd={cd}></CourseCard>)
                    }

                </div>
               

            </div>

        </div>
    );
};

export default Courses;