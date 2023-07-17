import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Valuee.css'
import data from '../../utils/accordion'
const Valuee = ()=>{
    return(
        <section className="V-Wrapper">
            <div className="paddings innerWidth flexCenter V-Container">
                {/*left side*/}
                <div className="Left-side">
                    <div className="img-Container">
                        <img src="./public/value.png" alt="" />
                    </div>
                </div>
                {/*right side*/}
                <div className="flexColStart Right-side">
                    <span className="orangeText">Our Value</span>
                    <span className='primaryText'>Value We Give to You</span>
                    <span className='secondaryText'>We always ready to help by providijng the best services for you.
                        <br />
                        We beleive a good blace to live can make your life better
                    </span>

                    <Accordion
                        className='Accordion'
                        allowMultipleExpanded = {false}
                        preExpanded={[0]}
                    >
                        {
                            data.map((item,i) =>{
                                return(
                                    <AccordionItem className='AccordionItem' key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='flexCenter Accordion-Button'>
                                                <div className="flexCenter icon">{item.icon}</div>
                                                <span className="primaryText heading">
                                                    {item.heading}
                                                </span>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20}/>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className="secondaryText">{item.detail}</p>
                                        </AccordionItemPanel>  
                                    </AccordionItem>
                                );
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Valuee