import React, { useRef, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    let from = location.state?.from?.pathname || "/";
    if (loading) {
        return (
            <div className='my-5 d-block mx-auto'>
                <Spinner animation="border" className='d-block mx-auto' role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
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
        console.log(password, confirmPassword);
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
        } else {
            setErrorText('wrong confirm password');
        }
        if (user) {
            navigate(from, { replace: true });
        }
        toast("Account Created");


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
                <p className='mt-3'>Are you new to our website? <Link to='/signup'>Please register!</Link></p>
                {error && <p className="alert alert-danger" role="alert">Error: {error.message}</p>}
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default Signup;