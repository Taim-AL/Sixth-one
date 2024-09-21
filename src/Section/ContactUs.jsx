import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DataContact } from '../Componant/Data';

function Contact(){
    return(
        <>
        <section id='contact'>
            <div className="outer-container">
                <div className="inner-container">
                        <div className='mt-5' style={{display:"flex",alignItems:"center"}}>
                            <h6 className='title-about'>CONTACT</h6>
                            <div className='hr-1'></div>
                        </div>
                        <h1 className='h1-about mb-5 mt-3'>CONTACT US</h1>

                        <Row className='mx-0'>
                            <Col md='4'>
                                {DataContact.map((e)=>{
                                    return(
                                        <div className="info-contact mb-3">
                                            {e.icon}
                                            <div className='con-info'>
                                                <h3>{e.title}</h3>
                                                <p>
                                                    {e.p1}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                                
                            </Col>
                            <Col md='8'>
                                <Row className='mx-0'>
                                    <Col md='6'>
                                        <input type="text" placeholder='Your Name' className='input-contact'/>
                                    </Col>
                                    <Col md='6'>
                                        <input type="email" placeholder='Your Email' className='input-contact'/>
                                    </Col>
                                    <Col md='12'>
                                        <input type="text" placeholder='Subject' className='input-contact'/>
                                    </Col>
                                    <Col md='12'>
                                        <textarea name="" id="" cols="30" rows="4" placeholder='Message' className='input-contact'></textarea>
                                    </Col>
                                </Row>
                                <div className='con-send'>
                                    <button className='Send-Message'>Send Message</button>
                                </div>
                            </Col>
                        </Row>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact;