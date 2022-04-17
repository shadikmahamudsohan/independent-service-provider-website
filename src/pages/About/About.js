import React from 'react';
import myImg from '../../Images/myImg.png';
import './About.css';

const About = () => {
    return (
        <div className='about-container py-3'>
            <div className="row container mx-auto align-items-center g-3">
                <div className="col-12 col-md-7">
                    <h2>Hi! My name is</h2>
                    <h1 className='mb-3'>M.D. Shadik Mahamud.</h1>
                    <h4 className='text-decoration-underline'>My goals</h4>
                    <p>I want to be a full stack web developer. I want to work in some famous companies like Google, Apple, Amazon etc. At first I want to learn all the basics and then advance topic of web development.</p>
                    <p>To reach my goal I will try to work 8 hours a day. I will dedicate myself for learning programming. I will practice my best. I will keep learning all the new things about web development.</p>
                </div>
                <div className="col-12 col-md-5">
                    <img className='about-img img-fluid' src={myImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;