import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import auth from '../../../firebase/firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';


const SignInWithGoogle = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    };
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            {error && <p className="alert alert-danger mt-3" role="alert">Error: {error?.message}</p>}
            <div className='d-flex align-items-center my-3'>
                <div style={{ height: '2px' }} className='w-50 bg-secondary'></div>
                <p className='mx-2 text-secondary'>or</p>
                <div style={{ height: '2px' }} className='w-50 bg-secondary'></div>
            </div>
            <button onClick={handleGoogleSignIn} className='btn btn-secondary w-100 fs-5 py-2'><FcGoogle fontSize='1.7rem' className='me-1' />Sign in with Google</button>
        </div>
    );
};

export default SignInWithGoogle;