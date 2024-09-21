import React from 'react';
import Wave from 'react-wavify';
import AOS from 'aos';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard , Autoplay} from "swiper";

//import data  
import { DataSblide, DataWaves } from '../Componant/Data.js';

function  Home(){
    AOS.init();
    return(
        <>
        

        <section id='home' style={{backgroundColor:"#333649"}}>
            <div style={{display:"flex",justifyContent:"center",padding:"4rem 0px"}}>
        <div className='continar-swiper'>
        <Swiper
        loop={true}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        Navigation={true}
        pagination={false}
        zoom={true}
        autoplay={{
            delay:4000,
            disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
        
        className="mySwiper"
        style={{padding:"40px 0px"}}
      >
        {DataSblide.map((e)=>{
            return(
                <SwiperSlide>
                    <div className='testimonial'>
                        <h2 className='title' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="700">
                            {e.title}
                        </h2>
                        <div className='continar-ditailes' style={{width:"63%"}}>
                            <p className='text-white text-center' style={{fontWeight:"600"}} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700" data-aos-delay="200">
                                <i class='bx bxs-quote-alt-left quote-icon'></i>{e.about}
                                <i class='bx bxs-quote-alt-right quote-icon'></i>
                            </p>
                        </div>
                        <div className='details text-center' >
                            <button className='details-btn' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700" data-aos-delay="400">Read More</button>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })}
        
      </Swiper>
      </div>
      </div>

        <div >

        {DataWaves.map((e,i=0)=>{
            return(
                <Wave
                fill={e.color}
                paused={false}
                options={{
                    height:70,
                    amplitude:e.amplitude,
                    speed:e.speed,
                    points:4,
                }}
                className={i===1?"":'wave-1'}
                />
            )
        })}
        
        </div>
        </section>
        
        </>
    )
}

export default Home;