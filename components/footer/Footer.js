import React from 'react';

import "./Footer.css";
import instagram from "../../assets/icons/instagram.jpg";
import linkedin from "../../assets/icons/linkedin.png";
import logo from "../../assets/icons/logo.png";
import telegram from "../../assets/icons/telegram.png";
import youtube from "../../assets/icons/youtube.png";
import twitter from "../../assets/icons/twitter.png";

const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                    <img src={logo} alt="" />
                </div>
                <p className='footer-text'>
                    NFT Brands is a Web3 development company <br /> providing end-to-end Metaverse & NFT solutions <br /> for Brands & Creators.
                </p>
                <div>
                    <img src={youtube} alt="" className='footer-socials' />
                    <img src={telegram} alt="" className='footer-socials footer-socials-space' />
                    <img src={linkedin} alt="" className='footer-socials footer-socials-space' />
                    <img src={twitter} alt="" className='footer-socials footer-socials-space' />
                    <img src={instagram} alt="" className='footer-socials footer-socials-space' />
                </div>

            </div>
            <div>
                <div className='footer-title'>
                    <p>Contact us </p>
                </div>
                <p className='footer-text'>
                    info@nftbrandsinc.com<br />

                    +1 (424) 438-8762<br />

                    9465 Wilshire Blvd.<br />
                    Beverly Hills, CA 90212
                </p>
            </div>
            <div>
                <div className='footer-title'>
                    <p>Join our news letter</p>
                </div>
                <p className='footer-text2'>Feel free to ask questions or provide information</p>
                <form className="footer-form">
                    <input type="email" placeholder='Enter your email for newsletters' />
                    <button>Subscribe</button>
                </form >
            </div>

        </footer>
    )
}

export default Footer