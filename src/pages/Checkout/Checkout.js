import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import './Checkout.css';

const Checkout = () => {
    const [validated, setValidated] = useState(false);
    const [user] = useAuthState(auth);


    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <div className='checkout-container'>
            <div className="container pt-5">
                <h1 className=''>Please Checkout</h1>
                <Form noValidate validated={validated} onSubmit={handleSignup}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control className='py-2' required type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='py-2' readOnly required type="email" placeholder={user?.email ? user?.email : 'user123@gmail.com'} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="phoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control className='py-2' required type="number" placeholder="Phone Number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="dateOfBirth">
                        <Form.Label>Date of birth</Form.Label>
                        <Form.Control className='py-2' required type="date" placeholder="Date of birth" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Checkout
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Checkout;