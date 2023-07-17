import React from 'react'
import './Header.css'
const Header = () =>{
    return(
        <section className='h-Wrapper'>

            <div className='flexCenter paddings innerWidth h-Container'>
                <img src=" ./public/logo.png" alt="" />

            

                <div className='flexCenter h-Menu'>
                    <a href="">Residency</a>
                    <a href="">Our Value</a>
                    <a href="">Contact Us</a>
                    <a href="">Get Started</a>
                    <button className='Button'>
                        Contact
                    </button>
                </div>
            </div>

        </section>
    )
}

export default Header