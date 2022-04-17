import React from 'react';
import './Home.css';
import { BiDownArrowAlt } from 'react-icons/bi';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <header className='header-container'>
                <div className='header-text container d-flex align-items-center'>
                    <div className='detail'>
                        <h1>
                            Hi! my name is Dr. Zahangir
                        </h1>
                        <h1>
                            I am a Doctor.
                        </h1>

                        <a href="#services">
                            <button className='btn btn-primary mt-5 px-4 py-2'>My Services<BiDownArrowAlt fontSize="1.5em" /></button>
                        </a>
                    </div>
                </div>
            </header>
            <Services />
        </div>
    );
};

export default Home;