import React, { useState } from 'react'
import { FaLinkedinIn, FaGithub, FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa'
import { InputText} from "primereact/inputtext";
import { Button } from 'primereact/button';
import './Contact.css'
const Contact = () => {
  const [likeState,setLikeState]=useState();
  const [values,setValues]=useState({
    guestName:undefined,
    comment:undefined
  })
  const {guestName,comment}=values;
  const handleSubmit=()=>{

  }
  const handleLikeChange=(likeVal)=>{
    setLikeState(likeVal);
  }
  return (
    <div className="contact_container">
      <div className="contact_header">
        <h1>Contact Details</h1>
      </div>
      <div className="contact_combine_container">
        <div className="contact_content_container">
          <div className="contact_column">
            <p className="icon_container" ></p>
            <p className="contact_text_container">Email :</p>
            <p className="contact_text_container">Mobile No. :</p>
            <p className="contact_text_container">Address :</p>
            <p className="contact_text_container">LinkedIn :</p>
            <p className="contact_text_container">Github :</p>
          </div>
          <div className="contact_column">
            <p className="icon_container" ></p>
            <p className="contact_text_container"><a href="mailto:rk2655415@gmail.com" className='contact_text_link'>rk265541@gmail.com</a> </p>
            <p className="contact_text_container"><a href="tel:+919015709221" className='contact_text_link'>9015709221</a> </p>
            <p className="contact_text_container"><span className="contact_text_link"> K-546 Gautam Vihar , Delhi-110053 </span></p>
            <p className="contact_text_container"><a href="https://www.linkedin.com/in/rahul-kumar-821109187/" className='contact_text_link with_icon_text'>Rahul kumar <FaLinkedinIn /></a> </p>
            <p className="contact_text_container"><a href="https://github.com/eccecntric-Rahul" className='contact_text_link with_icon_text'>Eccentric-Rahul <FaGithub /></a> </p>
          </div>
        </div>
        <div className="like_section">
          <h3>Hey, there</h3>
          <p>If you like my website , so can you please like this and if you want you can send a compliment too !</p>
          <span className="p-float-label input-wrapper">
          <InputText id="guestName" type="text" name="guestName" className="p-inputtext-lg textInput" value={guestName} onChange={(e)=>{setValues({...values,[e.target.name]:e.target.value})}}/>
          <label htmlFor="guestName">Your Name</label>  
          </span>
          <span className="p-float-label input-wrapper">
          <InputText id="comment" type="text"  name="comment" className="p-inputtext-lg textInput"  value={comment} onChange={(e)=>{setValues({...values,[e.target.name]:e.target.value})}}/>
          <label htmlFor="comment">Comment</label>  
        </span>
        <div className="like_button_container">
          <span className={likeState===false ? 'greenClr':null}><FaRegThumbsDown  onClick={()=>{handleLikeChange(false)}}/> </span>
          <span className={likeState===true ? 'greenClr':null}><FaRegThumbsUp  onClick={()=>{handleLikeChange(true)}}/></span>
        </div>
          <button onClick={handleSubmit} className="submit_button">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact