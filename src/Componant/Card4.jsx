import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Card4({img,name,work}){
    return(<>
        <div>
            <div className="con-card4 shadow">
                <div className="con-img-team">
                    <img className='img-team' src={img} alt="" />
                    <div className="con-icon-team">
                            <a href="#home"><TwitterIcon className='icon-team'/></a>
                            <a href="#home"><FacebookOutlinedIcon className='icon-team'/></a>
                            <a href="#home"><InstagramIcon className='icon-team'/></a>
                            <a href="#home"><LinkedInIcon className='icon-team'/></a>
                    </div>
                </div>
                <div className='con-name-team'>
                    <h4>{name}</h4>
                    <p>{work}</p>
                </div>
            </div>
        </div>
    
    </>)
}

export default Card4;