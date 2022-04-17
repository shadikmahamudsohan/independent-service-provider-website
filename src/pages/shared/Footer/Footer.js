import React from 'react';
import { AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="bg-primary text-light font-small pt-4">
            <div className="container ">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h5 className="text-uppercase">Contact With Us</h5>
                        <p>My pharmacy is located in Green Rd Dhaka 1215</p>
                        <div className='d-flex'>
                            <AiFillFacebook className='fs-1 me-2' style={{ cursor: 'pointer' }} />
                            <AiFillTwitterCircle className='fs-1 me-2' style={{ cursor: 'pointer' }} />
                            <FaInstagramSquare className='fs-1 me-2' style={{ cursor: 'pointer' }} />
                        </div>
                    </div>


                    <div className="col-12 col-md-6">
                        <h5>Numbers</h5>
                        <div>
                            <p className='mb-3'>Mobile Number: 017********</p>
                            <p className='mb-3'>Telephone Number: 0176 ** ** ***</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-100 pb-0" />

            < div className="footer-copyright py-3 d-flex justify-content-center" >
                <p className='me-1'>&copy; {year} Copyright:</p>
                <a className='text-white' href="https://mdbootstrap.com/">Independent-BD-Doctor.com</a>
            </div >

        </footer >
    );
};

export default Footer;