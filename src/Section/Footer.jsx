import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer(){
    return(
        <>
        <div className="container-footer">
            <div className="inner-footer">
                <h3>
                    Selecao
                </h3>
                <p>
                    Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.
                </p>
                <div className="con-footer-icon">
                    <a href="#home"><TwitterIcon className='icon-footer'/></a>
                    <a href="#home"><FacebookOutlinedIcon className='icon-footer'/></a>
                    <a href="#home"><InstagramIcon className='icon-footer'/></a>
                    <a href="#home"><GitHubIcon className='icon-footer'/></a>
                    <a href="#home"><LinkedInIcon className='icon-footer'/></a>
                </div>
                <p className='mt-3'>© Copyright<strong> Selecao</strong> . All Rights Reserved<br/>
                Designed by <a href='#home' className='a-footer'>Taim Al</a> </p>
            </div>
        </div>
        
        </>
    )
}

export default Footer;