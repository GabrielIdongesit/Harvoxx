import React from 'react'

import "./expert-card.css"

const ExpertCard = ({title, text}) => {
    return (
        <section className="expert-card">
            <h2 >
                {title}
            </h2>
            <p>
                {text}
            </p>
        </section>
    )
}

export default ExpertCard