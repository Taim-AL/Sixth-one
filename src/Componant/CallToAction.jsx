import React from 'react';
import { Col, Row } from 'react-bootstrap';

function Call(){
    return(<>
        <div className='call-contanir'>
            <div className='about-contanir'>
                <Row className='mx-0' style={{padding:"4rem 0rem"}}>
                    <Col md='8' xs='12' className='con-about-call'>
                        <h1>
                            Call To Action
                        </h1>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Col>
                    <Col md='4' xs='12' className='con-call-btn'>
                        <button className='call-btn'>
                            CALL TO ACTION
                        </button>
                    </Col>
                </Row>
            </div>
        </div>
        
        </>)
}

export default Call;