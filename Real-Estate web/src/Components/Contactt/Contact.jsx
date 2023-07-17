import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () =>{
    return(
        <section className="Contact-Wrapper">
            <div className="paddings innerWidth flexCenter C-Container">
                <div className="flexColStart C-Left">

                    <spam className="orangeText">Our Contact Us</spam>
                    <spam className="primaryText">Easy to Contact Us</spam>
                    <spam className="secondaryText" >We always ready to help by providijng the best services for you. We beleive a good
                    <br />
                    blace to live can make your life better
                    </spam>

                    <div className="flexColStart Contact-Modes">
                        <div className="flexStart Row">
                            <div className="flexColCenter Mode">
                                <div className="flexStart">
                                    <div className="flexStart Icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span>Call</span>
                                        <span>021 486 8465</span>
                                    </div>
                                </div>
                                <div className="flexCenter Button">Call Now</div>
                            </div>
                            <div className="flexColCenter Mode">
                                <div className="flexStart">
                                    <div className="flexStart Icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span>Video Call</span>
                                        <span>021 486 8465</span>
                                    </div>
                                </div>
                                <div className="flexCenter Button">Video Call Now</div>
                            </div>
                        </div>
                        <div className="flexStart Row">
                            <div className="flexColCenter Mode">
                                <div className="flexStart">
                                    <div className="flexStart Icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span>Chat Now</span>
                                        <span>021 486 8465</span>
                                    </div>
                                </div>
                                <div className="flexCenter Button">Chat Now</div>
                            </div>
                            
                            <div className="flexColCenter Mode">
                                <div className="flexStart">
                                    <div className="flexStart Icon">
                                        <HiChatBubbleBottomCenter size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span>Message</span>
                                        <span>021 486 8465</span>
                                    </div>
                                </div>
                                <div className="flexCenter Button">Message</div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="C-Right">
                    <div className="img-Container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact