import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from '../../shared/LoadingSpinner/LoadingSpinner';

const Signup = () => {
    const [validated, setValidated] = useState(false);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const [errorText, setErrorText] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    let navigate = useNavigate();
    let location = useLocation();
    if (loading) {
        <LoadingSpinner />;
    }

    if (user) {
        toast("Account Created");
    }

    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        setErrorText('');
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
            setErrorText('');
        } else {
            setErrorText('wrong confirm password');
        }
    };
    return (
        <div className='mx-auto my-5' style={{ maxWidth: '500px' }}>
            <Form noValidate validated={validated} onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control required ref={nameRef} type="text" placeholder="Enter name" />
                    <Form.Control.Feedback type="invalid">
                        Please provide your name.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email address.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required ref={passwordRef} type="password" placeholder="Password" />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid 6 digged password.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control required ref={confirmPasswordRef} type="password" placeholder="Confirm Password" />
                    <Form.Control.Feedback type="invalid">
                        Please provide your confirm password.
                    </Form.Control.Feedback>
                </Form.Group>
                <p className='mt-3'>Already have an account<Link to='/login' className='text-decoration-none'>Please Login!</Link></p>
                {error && <p className="alert alert-danger" role="alert">Error: {error?.message}</p>}
                {errorText && <p className="alert alert-danger" role="alert">Error: {errorText}</p>}
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default Signup;