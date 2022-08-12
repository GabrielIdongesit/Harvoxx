import React from 'react'

import "./features.css"
import features from "../../assets/images/features.png";
import FeatureCard from '../feature card/FeatureCard';
import group from "../../assets/images/group.png";
import group2 from "../../assets/images/group2.png";
import group3 from "../../assets/images/group3.png";
// import nft_white from "../../assets/images/nft-white.png";
// import pay_white from "../../assets/images/pay-white.png";
// import P2E_white from "../../assets/images/P2E-white.png";
// import div_white from "../../assets/images/div-white.png";

const Features = () => {
    return (
        <section className="feature">
            <div className='img-text-con'>
                <img src={features} alt='' />
            </div>
            <h2 className='section-title'>
                Core Developments
            </h2>
            <p className='section-sub-title'>
                We utilize blockchain to create  immersive shopping,<br /> soicalizing and networing experience for your demography.
            </p>
            <div className="expert-cards-con">
                
                <div className='feature-cards-main'>
                    <img src={group} alt="/" />
                    <FeatureCard img={group} title="Metaveres Develop" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
                </div>
                <div className='feature-cards-main2'>
                <img src={group3} alt="/" />
                    <FeatureCard img={group2} title="NFTs" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
                </div>
                <div className='feature-cards-main2'>
                <img src={group2} alt="/" />
                    <FeatureCard img={group3} title="NFT Payments " text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
                </div>
                {/* <div className='feature-cards-main2'>
                    <FeatureCard img={token_white} title="Tokenomics " text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
                </div>
                <div className='feature-cards-main2'>
                    <FeatureCard img={P2E_white} title="P2Es " text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
                </div>
                <div className='feature-cards-main2'>
                    <FeatureCard img={div_white} title="Diversify Your Revenue" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
                </div> */}
            </div>
        </section>
    )
}

export default Features