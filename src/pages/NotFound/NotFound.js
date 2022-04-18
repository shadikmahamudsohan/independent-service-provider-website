import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div style={{ height: '70vh' }}>
            <h1 className='text-danger my-3 text-center '>
                Page Not Found :(
            </h1>
            <h1 className='text-danger my-3 text-center '>
                404
            </h1>
            <button onClick={() => navigate('/home')} className='btn btn-warning d-block mx-auto py-2 px-5 rounded-pill'>
                Go Back To Home
            </button>
        </div>
    );
};

export default NotFound;