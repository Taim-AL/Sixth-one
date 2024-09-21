import React from 'react';

function Card3({i,title,price}){
    return(
        <>
        
        <div>
            <div className={i===2 ?"con2-card3 shadow":"con-card3 shadow"}>
                <div className={i===2?"con-title2":"con-title"}>
                    {i===4?
                    <div className="ribbon">
                        <span>Advanced</span>
                    </div>
                    :<></>
                    }
                    <h5>{title}</h5>
                </div>
                <div className="inner-card3">
                    <div className="price">
                        <p>$</p>
                        <h3>{price}</h3>
                        <span>/ month</span>
                    </div>
                    <p>Aida dere</p>
                    <p>Nec feugiat nisl</p>
                    <p>Nulla at volutpat dola</p>
                    <p className={i===1 ?'p-del':""}>Pharetra massa</p>
                    <p className={i===1 || i===2 ?'p-del':""}>Massa ultricies mi</p>
                </div>
                <div className="con-btn3">
                    <button className='btn-buy'>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Card3;