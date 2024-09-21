import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card1 from '../Componant/Card1';
import { DataCard1 } from '../Componant/Data';

function Services(){
    return(
        <>
        <section id='services'>
            <div className='outer-container'>
                <div className='inner-container'>
                    <div className='mt-5' style={{display:"flex",alignItems:"center"}}>
                        <h6 className='title-about'>SERVICES</h6>
                        <div className='hr-1'></div>
                    </div>
                    <h1 className='h1-about mb-5 mt-3'>WHAT WE DO OFFER</h1>
                    <Row className="mx-0 row-card1">
                        {DataCard1.map((e)=>{
                            return(
                                <Col lg='4' md='6' xs='12' className='mb-5'>
                                    <Card1 icon={e.icon} h3={e.h3} p1={e.p1}/>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </div>
        </section>
        </>
    )
}

export default Services;