import React from "react";
import './Footer.css'

const Footer = () =>{
    return(
        <section className="F-Wrapper">
            <div className="paddings innerWidth flexCenter F-Container">

                <div className="flexColStart F-left">
                    <img src="./public/logo2.png" alt="logo2" />
                    <span>
                        Our vision is to make all people <br />
                        the best place to live for them.
                    </span>
                </div>

                <div className="secondaryText flexColStart F-Right">
                    <span className="Info">Information</span>
                    <span className="secondaryText">203 California, fo 0143, USA</span>

                    <div className=" flexCenter F-Menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer