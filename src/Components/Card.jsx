import React, { useState } from 'react'
import {FaHeart,FaRegThumbsUp,FaJsSquare,FaPlay,FaStar} from 'react-icons/fa'
import {AiFillLike} from 'react-icons/ai'
import WideModal from './WideModal/WideModal';

const Card = (props) => {
  const [modalVisible,setModalVisible]=useState(false);
  const {index,title,card}=props;
  const [visible,setVisible]=useState(false);
  return (
    <>
    <div className='card_container' onMouseEnter={()=>{setVisible(true)}} onMouseLeave={()=>{setVisible(false)}} onClick={()=>setModalVisible(true)}>
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
    <WideModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
    <div className="modal_contianer">
    <div className="modal_image_section" style={card.bgColor?{backgroundColor:card.bgColor}:{}}>
    <img src={card.image} className='modal_card_image'  alt={title+'_'+index} />
    <div className="modal_fade_bottom"></div>
    </div>
    <div className="modal_title_section">
    <p className='modal_name'>{title}</p>
    <div className="modal_icon_section">
    <button className='button_wide_light' onClick={()=>({})} style={{marginRight:"1.5rem",fontSize:'1.2rem'}}><span style={{display:'flex',alignItems:'center'}}><FaPlay style={{marginRight:'1rem'}}/> Play</span></button>
    <ModalIconContainer><FaHeart className="modal_details_icon"/></ModalIconContainer>
    <ModalIconContainer><FaRegThumbsUp className="modal_details_icon"/></ModalIconContainer>
    <ModalIconContainer><FaJsSquare className="modal_details_icon"/></ModalIconContainer>
    </div>
    </div>
    <div className="modal_details_section">
    <div className="modal_description_container"> 
    <div className="modal_col1">
    <div className="modal_combine_container">
    {card.category&&<span className="modal_category">{card.category}</span>}
    {card?.heart && <span className="icon_tag">
    {[...Array(card.heart)]?.map((heart,ind)=><FaHeart key={'heart'+ind} className='modal_heart_icon'/>)}
    </span>}
    {card.matched&&<span className="modal_loved">{card.matched}% Loved</span>}
    </div>
    <div>
    {card.liked&&<p className="modal_like_container"><span className="like_outline"><AiFillLike className="like_icon" /></span> Most liked</p>}
    {card?.star && <span className="icon_tag">
      {[...Array(card.star)]?.map((star,ind)=><FaStar key={'star'+ind} className='modal_star_icon'/> )}
      </span>}
    </div>
    <p className="modal_description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At officia expedita culpa voluptates error libero id iste, ad quae omnis nobis qui quis corrupti a debitis amet dolore nulla tempore!
    Facere amet non unde repudiandae tenetur consectetur obcaecati. Molestias accusantium mollitia non exercitationem perspiciatis a fuga expedita nulla deleniti dignissimos commodi praesentium, vel labore perferendis beatae voluptate iusto reprehenderit. Necessitatibus?
    Impedit corrupti soluta dolorum minus deleniti delectus dolores aliquid necessitatibus provident neque, in cum hic quibusdam asperiores cumque nam quae excepturi quod dolor fugiat sequi. Dignissimos sunt aliquam veritatis maxime?
    At maxime veniam quos reiciendis modi, nam perferendis facere quibusdam fuga? Porro veniam dolorum nemo et culpa commodi dolorem! Quasi voluptatum at corporis voluptates debitis cum laboriosam. Optio, explicabo inventore!
    Quo fugit, commodi excepturi quis ea dolore quisquam eaque cumque ullam, ab magnam. Blanditiis inventore obcaecati quaerat ullam corporis sint nulla voluptatibus laudantium eius. Quod illum nisi debitis magnam aperiam.</p>
    
    </div>
    <div className="modal_col2">
    {card.quality && card.quality.length && <p className="modal_quality">
    <span className="modal_features">Features : </span>
    {card?.quality?.map((quality,index)=>{
      return index===card.quality.length-1?<span >{quality}</span>:<span >{quality} , </span>
    })}
    </p>}
    <p className="modal_advantages">
    <span className="modal_features">Advantages : </span>
    {card?.quality?.map((quality,index)=>{
      return index===card.quality.length-1?<span >{quality}</span>:<span >{quality} , </span>
    })}
    </p>
    <p className="modal_advantages">
    <span className="modal_features">This skill is : </span>
    {card?.quality?.map((quality,index)=>{
      return index===card.quality.length-1?<span >{quality}</span>:<span >{quality} , </span>
    })}
    </p>
    </div>
    </div>
    </div>
    </div>
      </WideModal>
    </>
  )
}

const IconContainer=({children})=>{
  return (
      <span className="icon_outline">
{children}
      </span>
  )
}

const ModalIconContainer=({children})=>{
  return (
      <span className="modal_icon_outline">
{children}
      </span>
  )
}
export default Card

