import React from 'react';
import './Information.css';

const Information = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='infoImage col-md-6'>

                </div>
                <div className='limitless-learning col-md-6 pl-4 pt-5'>

                    <div className='pt-5'>
                        <h1 className='departmentHeader pl-4 pt-5'>Limitless Learning,More Possibilities</h1>
                    </div>

                    <div style={{ width: '80%' }} className=''>
                        <p className='departmentParagraph pl-4 pt-4'>The University of Rochester is one of the country's top-tier research universities.Our campuses are home to 200 academic majors,more than 2,000 faculty and instructional staff,and some 10,000 students -- approximately half of whom are women</p>
                    </div>

                    <div style={{ width: '80%' }} className=''>
                        <p className='departmentParagraph pl-4 pt-4'>Learning at the University of Rochester is also on a very personal scale.Rochester remains one of the smallest and most collegiate among top research universities,with smaller classes,a low 10:1 student to teacher ratio, and increased interactions with faculty.</p>
                    </div>

                    <div className="row pt-5 pl-5">
                        <div className=" col-md-3">
                            <h3 style={{color: '#FFBA00'}}>4000</h3>
                            <h5  style={{color: '#FFBA00'}}>Students</h5>
                        </div>
                        <div className="col-md-3">
                            <h3  style={{color: '#FF6174'}}>260</h3>
                            <h5  style={{color: '#FF6174'}}>Courses</h5>
                        </div>
                        <div className="col-md-3">
                            <h3  style={{color: '#43CB83'}}>5679</h3>
                            <h5  style={{color: '#43CB83'}}>Hours Video</h5>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Information;