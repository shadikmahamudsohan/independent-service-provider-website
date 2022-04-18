import React from 'react';
const Blog = () => {
    return (
        <div className='container my-5'>
            <h1 className='text-center text-primary'>Answering Questions</h1>
            <div className="my-5 p-5 shadow rounded">
                <h3>1. Difference between authorization and authentication</h3>
                <div className="my-3">
                    <p> <span className='fw-bold fs-5'>Answer: </span>
                        Authentication is the process to see if the user is verified to enter in the website. This is the process of logging in a website. When you are new to a website it will first verify and see that if you are a safe parson to let inside the website.
                    </p>
                    <p>On the other hand authorization is a the process to verifying if the user have access to specific applications, like files, pages etc. For example if you are an admin you will get more access in the website then other users in the website.</p>
                </div>
                <h3 className='mt-5'>2.Why are you using firebase? What other options do you have to implement authentication?</h3>
                <div className="my-3">
                    <p> <span className='fw-bold fs-5'>Answer: </span>
                        I am using firebase for it's easy to use authentication systems for my website. Authentication is very important for every website. So to implement authentication in my website it is more easy and safe for using a 3rd party software. There are many 3rd party software for this. Like Auth0, MongoDB, Keycloak. To implement authentication other then firebase I can use Auth0 or MongoDB. Because both of them have very secure authentication systems. I will read there documentation first and follow there guidances.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;