import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card4 from '../Componant/Card4';
import { DataTeam } from '../Componant/Data';

function Team(){
    return(<>
    <section id='team'>
        <div className="outer-container">
            <div className="inner-container">
                    <div className='mt-5' style={{display:"flex",alignItems:"center"}}>
                        <h6 className='title-about'>TEAM</h6>
                        <div className='hr-1'></div>
                    </div>
                    <h1 className='h1-about mb-5 mt-3'>OUR HARDWORKING TEAM </h1>
                    <Row className='mx-0'>
                        {DataTeam.map((e)=>{
                            return(
                                <Col md='6' lg='3' xs='12' className='mb-5'>
                                    <Card4 img={e.img} name={e.name} work={e.work}/>
                                </Col>
                            )
                        })}
                    </Row>
            </div>
        </div>
    </section>
    
    
    </>)
}

export default Team;