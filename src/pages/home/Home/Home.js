import React from 'react';
import './Home.css';
import doctor from '../../../Images/doctor.png';
import { BiDownArrowAlt } from 'react-icons/bi';

const Home = () => {
    return (
        <div className='header-container'>
            <header>
                <div className='container d-flex align-items-center' style={{ height: '100vh' }}>
                    <div className='detail'>
                        <h1>
                            Hi! my name is Dr. Zahangir
                        </h1>
                        <h1>
                            I am a Doctor.
                        </h1>
                        <button className='btn btn-primary mt-5 px-4 py-2'>About Me <BiDownArrowAlt fontSize="1.5em" /></button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Home;