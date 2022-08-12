import React from 'react'

import "./feature-card.css"

const FeatureCard = ({group2, title, text}) => {
    return (
        <section className="feature-card">
            <div className='feature-card-color'>

                <div className="feature-img">
                    <img src={group2} alt="" />
                </div>
                <h2>
                    {title}
                </h2>
                <p>
                    {text}
                </p>
            </div>
        </section>
    )
}

export default FeatureCard