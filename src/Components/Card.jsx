import React, { useState } from 'react'
import {FaHeart,FaRegThumbsUp,FaJsSquare} from 'react-icons/fa'
import {AiFillLike} from 'react-icons/ai'

const Card = (props) => {
  const {index,title,card}=props;
  const [visible,setVisible]=useState(false);
  return (
    <div className='card_container' onMouseEnter={()=>{setVisible(true)}} onMouseLeave={()=>{setVisible(false)}}>
    {visible ? <div className="card" style={card.bgColor?{backgroundColor:card.bgColor}:{}} >
    <img src={card.image} className='card_image'  alt={title+'_'+index} />
    <div className="details_section">
    <div className="details_icon_container">
    <IconContainer><FaHeart className="details_icon"/></IconContainer>
    <IconContainer><FaRegThumbsUp className="details_icon"/></IconContainer>
    <IconContainer><FaJsSquare className="details_icon"/></IconContainer>
    </div>
    <p className='name' >"{title}"</p>
    <div className="combine_container">
    {card.matched&&<p className="match_container">{card.matched}% Loved</p>}
    {card.category&&<p className="category">{card.category}</p>}
    </div>
    {card.quality && card.quality.length && <p className="quality">
    {card?.quality?.map((quality,index)=>{
      return index===card.quality.length-1?<span >{quality}</span>:<span >{quality} <span className="details_bullet">&bull;</span> </span>
    })}
    </p>}
    {card.liked&&<p className="like_container"><span className="like_outline"><AiFillLike className="like_icon" /></span> Most liked</p>}
    </div>
    </div>
    :
    <div className="card" style={card.bgColor?{backgroundColor:card.bgColor}:{}} >
    <img src={card.image} className="card_image" alt={title+'_'+index} />
    </div>
    }
    </div>
  )
}

const IconContainer=({children})=>{
  return (
      <span className="icon_outline">
{children}
      </span>
  )
}

export default Card

