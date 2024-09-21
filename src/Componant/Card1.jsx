import React from 'react';

function Card1({icon,h3,p1}){
    return(
        <>
        <div>
            <div className='card1-container shadow'>
                <div className='icon-card1-con' >
                    {icon}
                </div>

                <div className='con-about-card1'>
                    <h3>{h3}</h3>
                    <p>{p1}</p>
                </div> 
            </div>
        </div>
        </>
    )
}

export default Card1;