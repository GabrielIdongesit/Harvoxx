import React from 'react'

import "./Ecocard.css";

const EcoCard = ({img, text}) => {
  return (
    <section className="eco-card">
            <div className='eco-card-img-con'>
                <img src={img} alt="" className='eco-card-img' />
            </div>
            <p>
            {text}
            </p>
        </section>
  )
}

export default EcoCard