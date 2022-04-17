import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from '../../shared/LoadingSpinner/LoadingSpinner';

const Login = () => {
    const [validated, setValidated] = useState(false);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [errorText, setErrorText] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        signinError,
    ] = useSignInWithEmailAndPassword(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // reset password
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    if (loading) {
        <LoadingSpinner />;
    }

    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        setErrorText('');

        signInWithEmailAndPassword(email, password);
    };
    if (user) {
        toast("Logged In");
        navigate(from, { replace: true });
    }
    if (sending) {
        <LoadingSpinner />;
    }
    const handleResetPassword = async () => {
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
            setErrorText('');
        }
        else {
            setErrorText('please enter your email address');
        }
    };
    return (
        <div className='mx-auto mt-5' style={{ maxWidth: '500px', height: '60vh' }}>
            <Form noValidate validated={validated} onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email address.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required ref={passwordRef} type="password" placeholder="Password" />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid 6 digged password.
                    </Form.Control.Feedback>
                </Form.Group>
                <p className='mt-3'>Are you new to our website? <Link to='/signup' className='text-decoration-none'>Please register!</Link></p>
                <p className='mt-3'>Forget password? <span onClick={handleResetPassword} className='text-primary' style={{ cursor: 'pointer' }}>Creat a new password!</span></p>
                {errorText && <p className="alert alert-danger" role="alert">Error: {errorText}</p>}
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default Login;