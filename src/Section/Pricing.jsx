import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card3 from '../Componant/Card3';
import { DataPricing } from '../Componant/Data';

function Pricing(){
    return(
        <>
        <section id='pricing'>
            <div className="outer-container">
                <div className="inner-container">
                        <div className='mt-5' style={{display:"flex",alignItems:"center"}}>
                            <h6 className='title-about'>PRICING</h6>
                            <div className='hr-1'></div>
                        </div>
                        <h1 className='h1-about mb-5 mt-3'>OUR COMPETING PRICES</h1>

                        <Row className='mx-0'>
                            {DataPricing.map((e)=>{
                                return(
                                    <Col lg='3' md='6' xs='12' className='mb-5'>
                                        <Card3 i={e.i} price={e.price} title={e.title}/>
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

export default Pricing;