import React from 'react';
import { AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="page-footer bg-primary text-light font-small blue pt-4 mt-5">
            <div className="container ">
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <h5 className="text-uppercase">Contact With Us</h5>
                        <p>My pharmacy is located in Green Rd Dhaka 1215</p>
                        <div className='d-flex'>
                            <AiFillFacebook className='fs-1 me-2' style={{ cursor: 'pointer' }} />
                            <AiFillTwitterCircle className='fs-1 me-2' style={{ cursor: 'pointer' }} />
                            <FaInstagramSquare className='fs-1 me-2' style={{ cursor: 'pointer' }} />
                        </div>
                    </div>

                    <hr className="w-100 pb-0" />

                    <div className="col-md-6 mb-md-0 mb-3">
                        <h5>Numbers</h5>
                        <div>
                            <p className='mb-3'>Mobile Number: 017********</p>
                            <p className='mb-3'>Telephone Number: 0176 ** ** ***</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-copyright py-3 d-flex justify-content-center">
                <p className='me-1'>&copy; {year} Copyright:</p>
                <a className='text-white' href="https://mdbootstrap.com/">Independent-BD-Doctor.com</a>
            </div>

        </footer>
    );
};

export default Footer;