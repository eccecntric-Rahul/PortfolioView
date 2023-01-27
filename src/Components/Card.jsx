import React, { useState } from 'react'
const Card = (props) => {
  const {index,title,card}=props;
  const [visible,setVisible]=useState(false);
  return (
    <div className='card_container' onMouseEnter={()=>{setVisible(true)}} onMouseLeave={()=>{setVisible(false)}}>
    {visible ? <div className="card" >
    <img src={card.image} className='card_image' />
    <p className='name' >{title}</p>
    </div>
    :
    <div className="card" >
    <img src={card.image} className="card_image" />
    </div>
    }
    </div>
  )
}

export default Card

