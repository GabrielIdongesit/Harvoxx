import React from 'react'

import "./expert.css"
import experts from "../../assets/images/experts.png";
import ExpertCard from '../expert-card/ExpertCard';

const Expert = () => {
    return (
        <section className="expert">
            <div className='img-text-con'>
                
                <img src={experts} alt='' />
            </div>
            <h2 className='section-title'>
                Subject Matter Experts
            </h2>
            <p className='section-sub-title'>
                We understand that  gaming has evolved at an exponetial rate creating the creating <br /> the need for ground breaking games in an immersive metaverse experience.
            </p>
            <div className="expert-cards-con">
                <div className='expert-cards-main'>
                    <ExpertCard title="30+" text="2D & 3D Graphic Designers" />
                </div>
                <div className='expert-cards-main2'>
                    <ExpertCard title="30+" text="Blockchain Developers" />
                </div>
                <div className='expert-cards-main2'>
                    <ExpertCard title="15+" text="Social Media & Community Managers"/>
                </div>
                <div className='expert-cards-main2'>
                    <ExpertCard title="5+" text="PR & Content Producers" />
                </div>
            </div>
        </section>
    )
}

export default Expert