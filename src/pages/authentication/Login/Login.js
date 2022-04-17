import React, { useRef, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [validated, setValidated] = useState(false);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [errorText, setErrorText] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (loading) {
        return (
            <div className='my-5'>
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
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(password);
        signInWithEmailAndPassword(email, password);
    };
    if (user) {
        toast("Logged In");
        navigate(from, { replace: true });
    }
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
                <p className='mt-3'>Are you new to our website? <Link to='/signup'>Please register!</Link></p>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default Login;