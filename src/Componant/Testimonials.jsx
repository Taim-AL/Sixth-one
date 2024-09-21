import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard , Autoplay} from "swiper";

//import data  
import { DataTestimonials } from '../Componant/Data.js';
import Card2 from './Card2.jsx';

function Testimonials(){
    return(
        <>
        <div className="outer-container" >
            <div className="inner-container">
                    <div className='mt-5' style={{display:"flex",alignItems:"center"}}>
                        <h6 className='title-about'>TESTIMONIALS</h6>
                        <div className='hr-1'></div>
                    </div>
                    <h1 className='h1-about mb-5 mt-3'>WHAT THEY ARE SAYING ABOUT US</h1>

                    <Swiper
                    loop={true}
                    cssMode={true}
                    navigation={false}
                    mousewheel={true}
                    keyboard={true}
                    Navigation={true}
                    pagination={true}
                    spaceBetween={50}
                    slidesPerView={3}
                    autoplay={{
                        delay:7000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        '@0.75': {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        '@1.00': {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },
                        '@1.50': {
                          slidesPerView: 3,
                          spaceBetween: 50,
                        },
                        '@2.00': {
                            slidesPerView: 3,
                            spaceBetween: 50,
                          },
                      }}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
                    
                    className="mySwiper"
                    
                >
                    {DataTestimonials.map((e)=>{
                        return(
                            <SwiperSlide style={{paddingBottom:"3rem"}}>
                                    <Card2 p1={e.about} img={e.img} name={e.name} work={e.work}/>
                            </SwiperSlide>
                        )
                    })}
                    
                </Swiper>
            </div>
        </div>
        </>
    )
}

export default Testimonials;