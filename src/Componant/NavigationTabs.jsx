import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import DoneAllIcon from '@mui/icons-material/DoneAll';
/////////Data
import { DataNavigationButtons, DataNavigationTaps } from './Data';


function NavigationTabs(){
    const [toggleState , setToggleState] = useState(1);
    const toggleTab=(index)=>{
        setToggleState(index);
    }
    return(<>
    
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"2rem"}}>
        <div className='about-contanir'>
            <div style={{display:"flex",alignItems:"center",flexWrap:"wrap",padding:"1rem",gap:"1rem"}}>
                {DataNavigationButtons.map((e,i=0)=>{
                    return(
                        <div className={toggleState === ++i? 'active-tabs' : 'tabs'} 
                        onClick={() => toggleTab(i)}
                        >
                            {e.icon}
                            <p>
                                {e.p1}
                            </p>
                            
                        </div>
                    )
                })}

            </div>
                {DataNavigationTaps.map((e,i=0)=>{
                    return(
                        <Row className={toggleState === ++i ? 'mx-0' : 'contante mx-0'}>
                            <Col md='6'>
                                <h3 className='mt-3'>{e.h3}</h3>
                                <p>
                                    {e.p1}
                                </p>
                                <p >
                                    {e.p2}
                                </p>
                                <p className='mb-1'>
                                    <DoneAllIcon className='done-icon'/> {e.p3.m1}<br/><br/>
                                    <DoneAllIcon className='done-icon'/>{e.p3.m1}<br/><br/>
                                    <DoneAllIcon className='done-icon'/>{e.p3.m3}<br/><br/>
                                    {e.p3.d1}{e.p3.m4}
                                </p>
                                <p className='mb-5'>
                                    {e.p4}
                                </p>
                                
                            </Col>
                            <Col md='6' style={{display:"flex",justifyContent:"center"}}>
                                <img src={e.image} alt="" className='w-75'/>
                            </Col>
                        </Row>
                    )
                })}
        </div>
    </div>
    
    
    
    
    </>)
}
export default NavigationTabs;