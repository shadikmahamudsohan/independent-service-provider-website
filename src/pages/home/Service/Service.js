import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { CgCheckO } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

const Service = ({ img, name, description, price }) => {
    const navigate = useNavigate();
    return (
        <Col>
            <Card className='shadow'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Title>Price: {price}$</Card.Title>
                    <Card.Text>
                        <button onClick={() => navigate('/checkout')} className='btn btn-primary mt-3'>Check Out <CgCheckO fontSize='1.3rem' className='mx-1' /></button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;