import React, { useState } from 'react';
import './Navbar.css';
import AOS from 'aos';

import {Link} from 'react-scroll';
/////////////icon 
import DehazeIcon from '@mui/icons-material/Dehaze';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import { Buttons } from '../Data';

function Navbar(){

    AOS.init();

    const [cla,setCla] = useState(false);
    
    const [navbar , setNavbar]=useState(false);

    function handelClick(){
        setCla(!cla)
    }

    const changeColor =()=>{
        if(window.scrollY >= 10){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    
    window.addEventListener('scroll',changeColor);


    return(<>

             <nav className={navbar ? 'NavbarItems1 fixed-top shadow ' : 'NavbarItems fixed-top'} >
                 <h1 className='navbar-logo'> Selecao </h1>
                 <div className='menu-icon' onClick={handelClick}>
                     <DehazeIcon className={cla ?'more1':'more'}/>
                 </div>
                 <ul className={cla ? '' : 'hide'} >
                        {Buttons.map((e)=>{
                            return(
                                <>
                                    <li>
                                        <Link className='a1' activeClass="nav-link" to={e.to} spy={true} smooth={true} offset={-100} duration={500}>{e.name}</Link>
                                    </li>
                                </>
                            )
                        })}
                 </ul>
             </nav>
             <div style={{height:"70px"}} ></div>
    
             <a href='#home' className='a-up' data-aos="fade-down"><ArrowUpwardOutlinedIcon className='icon-up'/></a>
         </>)
}

export default Navbar;