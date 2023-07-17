import React from 'react'
import {Swiper, SwiperSlide,useSwiper} from 'swiper/react'
import "swiper/css"
import './Residencies.css'
import data from "../../utils/slider.json"
import { sliderSettings } from '../../utils/Common'
const Residencies = ()=>{
    return(
        <section className="R-Wrapper">
            <div className="paddings innerWidth flexConStart R-Container">
                <div className="paddings innerWidth flexColStart Heading">
                    <span className='Best-Choices'>Best Choices</span>
                    <span className='Popular'>Popular Residencies</span>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButtons/>
                    {data.map((card,i)=> (
                        <SwiperSlide key={i}>
                            <div className="flexColStart R-Card">
                                <img src={card.image} alt="home" />
                                <span>
                                    <span>$</span>
                                    <span>{card.price}</span>
                                </span>
                                <span className="Residency-Name">{card.name}</span>
                                <span className='Residency-Describe'>{card. detail}</span>
                            </div>
                            
                        </SwiperSlide>
                    ))}
                </Swiper>
                
            </div>
        </section>
    )
}

export default Residencies

const SliderButtons = () =>{
    const swiper = useSwiper();
    return(
        <div className='flexEnd R-Button'>
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}