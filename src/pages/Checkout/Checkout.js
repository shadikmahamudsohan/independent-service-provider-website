import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        const name = event.target.name.value;
        const number = event.target.phoneNumber.value;
        const address = event.target.address.value;
        if (name && number && address) {
            toast('thank you for the booking.');
        }
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
                    <Form.Group className="mb-3" controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control className='py-2' required type="text" placeholder="Your Address" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Checkout
                    </Button>
                </Form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Checkout;