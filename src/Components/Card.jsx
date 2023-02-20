import React, { useState } from 'react'
import { FaHeart, FaRegThumbsUp, FaJsSquare, FaPlay, FaStar, FaAngleDown } from 'react-icons/fa'
import { AiFillLike } from 'react-icons/ai'
import WideModal from './WideModal/WideModal';
import ImageViewer from 'react-simple-image-viewer';
import { RxCross2 } from "react-icons/rx"
import Skeleton from 'react-skeleton-loader';
const Card = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { index, title, card, onlyPhoto, cards } = props;
  const [visible, setVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = cards.map(card => card.image);
  const handleImageClick = () => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }
  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false);
  };

  const CrossComponent = () => {
    return (
      <span className="viewer_cross" key={index+'-cross'}>
        <RxCross2 className="modal_cross_icon" />
      </span>
    )
  }

  return (
    <>
      {onlyPhoto ?
        <div className="photo_card_container" key={'photo_card_' + index} onClick={() => handleImageClick()}>
          <div className="photo_card"  style={{ paddingTop: 0 }} >
            <img src={card.image} className="photo_card_image" alt={'photo_card_' + index} />
          </div>
        </div>
        :
        <div className='card_container' key={title+'-card'} onClick={()=>setModalVisible(true)}>
            <div className="card"  style={card.bgColor ? { backgroundColor: card.bgColor } : {}} >
              <img src={card.image} className='card_image' alt={title + '_' + index} />
              <div className={ "details_section"} >
                <div className="details_icon_container">
                  <span><IconContainer><FaHeart className="details_icon" color={"var(--red)"} /></IconContainer>
                    <IconContainer><FaRegThumbsUp className="details_icon" /></IconContainer>
                    <IconContainer><FaJsSquare className="details_icon" /></IconContainer></span>
                  <IconContainer marginRight={true}><FaAngleDown className="details_icon" /></IconContainer>
                </div>
                <p className='name' >"{title}"</p>
                <div className="combine_container">
                  {card.matched && <p className="match_container">{card.matched}% Loved</p>}
                  {card.category && <p className="category">{card.category}</p>}
                </div>
                {card.quality && card.quality.length!==0 && <p className="quality">
                  {card?.quality?.map((quality, index) => {
                    return index === card.quality.length - 1 ? <span >{quality}</span> : <span >{quality} <span className="details_bullet">&bull;</span> </span>
                  })}
                </p>}
                {card.liked && <p className="like_container"><span className="like_outline"><AiFillLike className="like_icon" /></span> Most liked</p>}
              </div>
            </div>
            <div className="dummy_card" >
              <Skeleton className="skeleton_card_image" />
            </div>
        </div>
      }
      <WideModal modalVisible={modalVisible} key={index+"-card-modal"} setModalVisible={setModalVisible}>
        <div className="modal_contianer">
          <div className="modal_image_section" style={card.bgColor ? { backgroundColor: card.bgColor } : {}}>
            <img src={card.image} className='modal_card_image' alt={title + '_' + index} />
            <div className="modal_fade_bottom"></div>
          </div>
          <div className="modal_title_section">
            <p className='modal_name'>{title?.split(' ')?.[0]}</p>
            <div className="modal_icon_section">
              <button className='button_wide_light' onClick={() => ({})} style={{ marginRight: "1.5rem", fontSize: '1.2rem' }}><span style={{ display: 'flex', alignItems: 'center' }}><FaPlay style={{ marginRight: '1rem' }} /> Play</span></button>
              <ModalIconContainer><FaHeart color={"var(--red)"} className="modal_details_icon" /></ModalIconContainer>
              <ModalIconContainer><FaRegThumbsUp className="modal_details_icon" /></ModalIconContainer>
              <ModalIconContainer><FaJsSquare className="modal_details_icon" /></ModalIconContainer>
            </div>
          </div>
          <div className="modal_details_section">
            <div className="modal_description_container">
              <div className="modal_col1">
                <div className="modal_combine_container">
                  {card.category && <span className="modal_category">{card.category}</span>}
                  {card?.heart && <span className="icon_tag">
                    {[...Array(card.heart)]?.map((heart, ind) => <FaHeart key={'heart' + ind} className='modal_heart_icon' />)}
                  </span>}
                  {card.matched && <span className="modal_loved">{card.matched}% Loved</span>}
                </div>
                <div>
                  {card.liked && <p className="modal_like_container"><span className="like_outline"><AiFillLike className="like_icon" /></span> Most liked</p>}
                  {card?.star && <span className="icon_tag">
                    {[...Array(card.star)]?.map((star, ind) => <FaStar key={'star' + ind} className='modal_star_icon' />)}
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
                  {card?.quality?.map((quality, index) => {
                    return index === card.quality.length - 1 ? <span >{quality}</span> : <span >{quality} , </span>
                  })}
                </p>}
                <p className="modal_advantages">
                  <span className="modal_features">Advantages : </span>
                  {card?.quality?.map((quality, index) => {
                    return index === card.quality.length - 1 ? <span >{quality}</span> : <span >{quality} , </span>
                  })}
                </p>
                <p className="modal_advantages">
                  <span className="modal_features">This skill is : </span>
                  {card?.quality?.map((quality, index) => {
                    return index === card.quality.length - 1 ? <span >{quality}</span> : <span >{quality} , </span>
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </WideModal>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
          style={{ height: "100vh", width: "100vw", overflow: 'hidden' }}
          backgroundStyle={{ height: "100vh", width: "100vw", overflow: 'hidden', zIndex: 1000 }}
          closeComponent={<CrossComponent />}
          key={'imageViewer-'+ index}
        />
      )}
    </>
  )
}

const IconContainer = ({ children, marginRight }) => {
  return (
    <span className="icon_outline" style={marginRight ? { marginRight: 0 } : {}}>
      {children}
    </span>
  )
}

const ModalIconContainer = ({ children }) => {

  return (
    <span className="modal_icon_outline">
      {children}
    </span>
  )
}


export default Card

