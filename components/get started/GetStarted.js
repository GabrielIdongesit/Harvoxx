import React from 'react'

import "./getStarted.css"
import ecosystem2 from "../../assets/images/ecosystem2.png";

const GetStarted = () => {
    return (
        <section className="get-started">
            <div className='img-text-con'>
                <img src={ecosystem2} alt='' />
            </div>
            <h2 className='section-title'>
                Get Started
            </h2>
            <p className='section-sub-title'>
                Fill out the form below to get started!
            </p>
            <div className='get-started-form-con'>
                <form className='get-started-form'>
                    <div className="form-group-left">
                        <fieldset className="fieldset">
                            <legend>FULL NAME</legend>
                            <input type="text" id="fname" name="fname" className='get-started-input' />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend>EMAIL ADDRESS</legend>
                            <input type="email" id="fname" name="fname" className='get-started-input' />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend>PHONE NO.</legend>
                            <input type="number" className='get-started-input' />
                        </fieldset>
                    </div>
                    <div className="form-group-right">
                        <fieldset>
                            <legend>MESSAGE</legend>
                            <textarea className='get-started-textarea' placeholder="Feel free to ask questions or provide information,.The more you share with us the more we can help you " />

                        </fieldset>
                        <button className='get-started-button'>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default GetStarted