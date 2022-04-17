import React from 'react';
import service1 from '../../../Images/service1.jpg';
import service2 from '../../../Images/service2.jpg';
import service3 from '../../../Images/service3.jpg';
import { Card, Col, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const services = [
        { id: 1, name: 'LABOLATORY TESTS', description: "A medical procedure that involves testing a sample of blood, urine, or other substance from the body.", img: service1, price: 75 },
        { id: 2, name: 'ECG TESTS', description: "An electrocardiogram (ECG) is a simple test that can be used to check your heart's rhythm and activity.", img: service2, price: 125 },
        { id: 3, name: 'PHYSICAL EXAMINATION', description: 'A physical examination is a routine test your primary care provider (PCP) performs to check your overall health', img: service3, price: 50 },
    ];
    return (
        <section id='services' className='my-5 container'>
            <h1 className='fs-1 text-primary mt-5 text-center'>My Services</h1>
            <div>
                <Row xs={1} md={2} lg={3} className="g-4 my-3">
                    {
                        services.map(service => <Service
                            key={service.id}
                            name={service.name}
                            img={service.img}
                            price={service.price}
                            description={service.description}
                        />)
                    }
                </Row>
            </div>
        </section>
    );
};

export default Services;