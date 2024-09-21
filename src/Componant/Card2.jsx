import React from 'react';
// import img1 from '../Assets/images/testimonials/testimonials-1.jpg';

function Card2({p1,img,name,work}){
    return(<>
        <div className="con-card2 shadow">
            <p>
            <i class='bx bxs-quote-alt-left quote-icon2'></i>
            {p1}
            <i class='bx bxs-quote-alt-right quote-icon2'></i>
            </p>
            <div className='con-descr'>
                <img src={img} className='img-testimonials' alt="" />
                <h4>
                {name}
                </h4>
                <p>
                    {work}
                </p>
            </div>
        </div>
        
        </>)
}

export default Card2;