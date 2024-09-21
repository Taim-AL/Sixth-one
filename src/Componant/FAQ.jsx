import React from 'react';
import ControlledAccordions from './Accordion1';

function FAQ(){
    return(
        <>
        <div className="outer-container">
            <div className="inner-container">
                    <div className='mt-5' style={{display:"flex",alignItems:"center"}}>
                        <h6 className='title-about'>F.A.Q</h6>
                        <div className='hr-1'></div>
                    </div>
                    <h1 className='h1-about mb-5 mt-3'>FREQUENTLY ASKED QUESTIONS</h1>
                    <ControlledAccordions/>
            </div>
        </div>
        </>
    )
}

export default FAQ;