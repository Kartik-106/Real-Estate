import React from'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import Countup from 'react-countup'
import { motion} from 'framer-motion'
const Hero = () =>{
    return(
        <section className="Hero-Wrapper">
            <div className="paddings innerWidth flexCenter Hero" >

                <div className="flexColStart Hero-left">
                    
                    <div className="Hero-Title">
                    <div className="Hero-Circle"/>
                        <motion.h1 
                        initial={{y:"2rem",opacity:0}}
                        animate={{y:"0rem",opacity:1}}
                        transition={{
                            duration:3,
                            type:"spring"
                        }}
                        >
                        Discover <br/> Most Suitable <br/> Property
                    </motion.h1>
                    </div>

                    <div className="flexColStart Hero-Description">
                        <span>Find a variety of properties that suit you very easilty<br/>
                            Forget all difficulties in finding a residence for you
                        </span>
                    </div>

                    <div className="Search-Box">
                        <HiLocationMarker color='#00ADB5' size={25}/>
                        <input type='text'/>
                        <button className='Button'>Search</button>
                    </div>
                    
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <Countup start={8800} end={9000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Premium Products</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <Countup start={1500} end={2000} duration={2} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customers</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <Countup start={12} end={20} duration={2} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Award Wining</span>
                        </div>
                    </div>

                </div>

                <div className="flexColStart Hero-right">

                    <motion.div
                    initial={{x:"7rem", opacity:0}}
                    animate={{x:"0rem",opacity:1}}
                    transition={{
                        duration:3,
                        type:"spring"
                    }}
                    className="img-Container">
                        <img src="./public/hero-image.png" alt="" />
                    </motion.div>

                </div>
            </div>

        </section>
    )
}

export default Hero