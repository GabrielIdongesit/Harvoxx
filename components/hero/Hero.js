import React from 'react'

import "./hero.css"
import hero_text from "../../assets/images/hero_text.png";
import connect4 from "../../assets/images/connect4.png";
// import img3 from "../../assets/images/img3.png";
import vector2 from "../../assets/images/vector2.png";
import ellipse from "../../assets/images/ellipse.png";

const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero-left'>
                <img src={hero_text} alt="" />
                <p>
                    We are entrepreneurs that come from a fast-paced and <br /> have been participating through investments in the <br /> blockchain & crypto space for several years.
                </p>
                <div className="hero-left-icons">
                    <div className='hero-btn-con'>
                        <button>Get Started</button>
                    </div>
                <img src={vector2} alt="" />
                <img src={ellipse} alt="" />
                </div>
            </div>
            {/* <div className="hero-img">
                <img src={img3} alt="" />
            </div> */}
            <div className='hero-right'>
                <img src={connect4} alt="" />
            </div>
        </section>
    )
}

export default Hero