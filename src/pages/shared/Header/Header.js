import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { CgLogIn, CgLogOut } from 'react-icons/cg';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleLogout = () => {
        signOut(auth);
    };
    return (
        <>
            <Navbar bg="primary" variant="dark" sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} className='fw-bold' to='/home'>
                        IP-BD-Doctor
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} className='mx-2 fw-bold' to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} className='mx-2 fw-bold' to='/about'>About</Nav.Link>
                            <Nav.Link as={Link} className='mx-2 fw-bold' to='/blog'>Blog</Nav.Link>
                            {
                                user ?
                                    <button onClick={handleLogout} className='btn btn-danger fw-bold'>LogOut <CgLogOut className='text-light' fontSize="1.5em" /></button>
                                    : (<>
                                        <button onClick={() => navigate('/login')} className='btn btn-light text-primary fw-bold'>Login <CgLogIn className='text-primary' fontSize="1.5em" /></button>
                                    </>)
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;