import React from 'react'

import "./ecosystem.css"
import Ecosystem3 from "../../assets/images/Ecosystem3.png";
import EcoCard from '../ecosystem card/EcoCard';
import brand from "../../assets/images/brand.png";
import webthree from "../../assets/images/webthree.png";
import metaverse2 from "../../assets/images/metaverse2.png";
import live from "../../assets/images/live.png";

const Ecosystem = () => {
    return (
        <section className="ecosystem">
            <div className='img-text-con'>
                <img src={Ecosystem3} alt='' />
            </div>
            <h2 className='section-title'>
                Our Ecosystem
            </h2>
            <p className='section-sub-title'>
                NFT Brands in a web3 development company providing end to Metaverse
            </p>
            <div className="eco-cards-con">
                <div className='eco-cards-main'>
                    <EcoCard img={brand} text="End-to-End NFT Development" />
                </div>
                <div className='eco-cards-main2'>
                    <EcoCard img={webthree} text="Buy an NFT in 3 simple steps" />
                </div>
                <div className='eco-cards-main2'>
                    <EcoCard img={metaverse2} text="Enter the Metaverse" />
                </div>
                <div className='eco-cards-main2'>
                    <EcoCard img={live} text="Enter our 0% Fees NFT Marketplace" />
                </div>
            </div>
        </section>
    )
}

export default Ecosystem