import React, { useState } from 'react'
import { FaLinkedinIn, FaGithub, FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa'
import { InputText} from "primereact/inputtext";
import { Formik } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import './Contact.css'
const Contact = () => {
  const [likeState,setLikeState]=useState();
  const initialValues={
    guestName:'',
    comment:'',
    email:'',
  }

  const schema = Yup.object().shape({
    guestName:Yup.string().min(2,'Name is too short').max(100,'Name is too long').required('Name is required'),
    email: Yup.string().email().required("Email is required"),
    comment:Yup.string().min(2,'Comment is too short').max(1000,'Comment is too long'),
  })


  const submitForm=async (values)=>{
   if(likeState === false || likeState===true){
    const formData = new FormData();
    formData.append('guestName',values.guestName);
    formData.append('email',values.email);
    formData.append('comment',values.comment);
    formData.append('like',likeState);
    try{
      const resp = await axios.post('/review',formData);
    }catch(err){
      console.log(err)
    }
   }else{
     console.log('Pls press the thumb button')
   }
  }
  const handleLikeChange=(likeVal)=>{
    setLikeState(likeVal);
  }


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty
        } = formik;
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
          <InputText id="guestName" type="text" name="guestName" className="p-inputtext-lg textInput" value={values.guestName}  onChange={handleChange} onBlur={handleBlur}/>
          <label htmlFor="guestName">Your Name</label>  
          {errors.guestName && touched.guestName && (
          <span className="error">{errors.guestName}</span>
          )}
          </span>
        <span className="p-float-label input-wrapper">
          <InputText id="email" type="email"  name="email" className="p-inputtext-lg textInput"  value={values.email}  onChange={handleChange} onBlur={handleBlur}/>
          <label htmlFor="email">Email</label> 
          {errors.email && touched.email && (
          <span className="error">{errors.email}</span>
          )}
        </span>
          <span className="p-float-label input-wrapper">
          <InputText id="comment" type="text"  name="comment" className="p-inputtext-lg textInput"  value={values.comment}  onChange={handleChange} onBlur={handleBlur}/>
          <label htmlFor="comment">Comment</label>  
          {errors.comment && touched.comment && (
          <span className="error">{errors.comment}</span>
          )}
        </span>
        <div className="like_button_container">
          <span className={likeState===false ? 'redClr':null}><FaRegThumbsDown className="like_icon"  onClick={()=>{handleLikeChange(false)}}/> </span>
          <span className={likeState===true ? 'greenClr':null}><FaRegThumbsUp className="like_icon"  onClick={()=>{handleLikeChange(true)}}/></span>
        </div>
          <button onClick={handleSubmit} className="submit_button"  disabled={!(dirty && isValid)}>Send</button>
        </div> 
      </div>
    </div>
        )}}
    </Formik>
  )
}

export default Contact