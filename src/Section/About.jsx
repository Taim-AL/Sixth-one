import React from 'react';
import { Col, Row } from 'react-bootstrap';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import NavigationTabs from '../Componant/NavigationTabs';
import Call from '../Componant/CallToAction';

function About (){
    return(<>
    <section id='about'>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div className='about-contanir'>
                <div className='mt-5' style={{display:"flex",alignItems:"center"}}>
                    <h6 className='title-about'>ABOUT</h6>
                    <div className='hr-1'></div>
                </div>
                <h1 className='h1-about'>WHO WE ARE</h1>
                <Row className='mx-0 mt-5'>
                    <Col md='6' className='mt-1'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p>
                            <DoneAllIcon className='done-icon'/>Ullamco laboris nisi ut aliquip ex ea commodo consequat<br/><br/><DoneAllIcon className='done-icon'/>Duis aute irure dolor in reprehenderit in voluptate velit<br/><br/><DoneAllIcon className='done-icon'/>Ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </Col>
                    <Col md='6' className='mt-1'>
                        <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <button className='learn-btn'>
                            Learn More
                        </button>
                    </Col>
                </Row>
            </div>
        </div>
        <NavigationTabs/>
        <Call/>
    </section>
    </>)
}
export default About;