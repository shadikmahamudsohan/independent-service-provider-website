import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = () => {
    const notify = () => toast("Wow so easy!");

    return (
        <div>
            <h2>this is blog</h2>
            <div>
                <button onClick={notify}>Notify!</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Blog;