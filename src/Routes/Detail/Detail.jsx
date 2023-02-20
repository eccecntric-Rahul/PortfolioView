import React from 'react'
import { FaHeart, FaRegThumbsUp, FaJsSquare, FaPlay, FaStar, FaAngleDown } from 'react-icons/fa'
import { AiFillLike } from 'react-icons/ai'
import { useNavigate,useLocation } from 'react-router-dom';
import { ModalIconContainer } from '../../Components/Card';
import "./Detail.css";
const Detail = (props) => {
    const {state}=useLocation();
    const { index, title, card } = state;
    return (
        <div>
            <div className="detail_contianer">
                <div className="detail_image_section" style={card.bgColor ? { backgroundColor: card.bgColor } : {}}>
                    <img src={card.image} className='detail_card_image' alt={title + '_' + index} />
                    <div className="detail_fade_bottom"></div>
                </div>
                <div className="detail_title_section">
                    <p className='detail_name'>{title?.split(' ')?.[0]}</p>
                    <div className="detail_icon_section">
                        <button className='button_wide_light' onClick={() => ({})} style={{ marginRight: "1.5rem", fontSize: '1.2rem' }}><span style={{ display: 'flex', alignItems: 'center' }}><FaPlay style={{ marginRight: '1rem' }} /> Play</span></button>
                        <ModalIconContainer><FaHeart color={"var(--red)"} className="modal_details_icon" /></ModalIconContainer>
                        <ModalIconContainer><FaRegThumbsUp className="modal_details_icon" /></ModalIconContainer>
                        <ModalIconContainer><FaJsSquare className="modal_details_icon" /></ModalIconContainer>
                    </div>
                </div>
                <div className="detail_details_section">
                    <div className="detail_description_container">
                        <div className="detail_col1">
                            <div className="detail_combine_container">
                                {card.category && <span className="detail_category">{card.category}</span>}
                                {card?.heart && <span className="icon_tag">
                                    {[...Array(card.heart)]?.map((heart, ind) => <FaHeart key={'heart' + ind} className='detail_heart_icon' />)}
                                </span>}
                                {card.matched && <span className="detail_loved">{card.matched}% Loved</span>}
                            </div>
                            <div>
                                {card.liked && <p className="detail_like_container"><span className="like_outline"><AiFillLike className="like_icon" /></span> Most liked</p>}
                                {card?.star && <span className="icon_tag">
                                    {[...Array(card.star)]?.map((star, ind) => <FaStar key={'star' + ind} className='detail_star_icon' />)}
                                </span>}
                            </div>
                            <p className="detail_description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At officia expedita culpa voluptates error libero id iste, ad quae omnis nobis qui quis corrupti a debitis amet dolore nulla tempore!
                                Facere amet non unde repudiandae tenetur consectetur obcaecati. Molestias accusantium mollitia non exercitationem perspiciatis a fuga expedita nulla deleniti dignissimos commodi praesentium, vel labore perferendis beatae voluptate iusto reprehenderit. Necessitatibus?
                                Impedit corrupti soluta dolorum minus deleniti delectus dolores aliquid necessitatibus provident neque, in cum hic quibusdam asperiores cumque nam quae excepturi quod dolor fugiat sequi. Dignissimos sunt aliquam veritatis maxime?
                                At maxime veniam quos reiciendis modi, nam perferendis facere quibusdam fuga? Porro veniam dolorum nemo et culpa commodi dolorem! Quasi voluptatum at corporis voluptates debitis cum laboriosam. Optio, explicabo inventore!
                                Quo fugit, commodi excepturi quis ea dolore quisquam eaque cumque ullam, ab magnam. Blanditiis inventore obcaecati quaerat ullam corporis sint nulla voluptatibus laudantium eius. Quod illum nisi debitis magnam aperiam.</p>

                        </div>
                        <div className="detail_col2">
                            {card.quality && card.quality.length && <p className="detail_quality">
                                <span className="detail_features">Features : </span>
                                {card?.quality?.map((quality, index) => {
                                    return index === card.quality.length - 1 ? <span >{quality}</span> : <span >{quality} , </span>
                                })}
                            </p>}
                            <p className="detail_advantages">
                                <span className="detail_features">Advantages : </span>
                                {card?.quality?.map((quality, index) => {
                                    return index === card.quality.length - 1 ? <span >{quality}</span> : <span >{quality} , </span>
                                })}
                            </p>
                            <p className="detail_advantages">
                                <span className="detail_features">This skill is : </span>
                                {card?.quality?.map((quality, index) => {
                                    return index === card.quality.length - 1 ? <span >{quality}</span> : <span >{quality} , </span>
                                })}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail