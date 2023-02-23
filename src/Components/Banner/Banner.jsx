import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import './Banner.css'
import { FaGithub,FaLinkedin ,FaWhatsapp} from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';
const Banner = (props) => {
    const details = useSelector ((state)=>(state?.details?.[0]))
  const isMobileOrTab = useMediaQuery({ query: '(max-width: 991px)' })
  const [bannerData,setBannerData] = useState ({
        title: details?.name || "Rahul Kumar",
        image: details?.bannerImage?.[1],
        description: details?.description
    });
    useEffect(()=>{
        setBannerData({
            title: details?.name,
            image: isMobileOrTab?details?.mobileBanner:details?.bannerImage?.[4],
            description: details?.description
        })
    },[details])

    const [buttonDesc] = useState({
        button1: 'Linked In',
        button2: "Github"
    })
    const handleRedirectionClick=(type)=>{
        switch(type){
            case 'linkedIn': window.open('https://www.linkedin.com/in/rahul-kumar-821109187/','_blank')
                            break;
            case 'github':  window.open('https://github.com/eccecntric-Rahul','_blank')
                            break;
            default:  window.open('https://www.linkedin.com/in/rahul-kumar-821109187/','_blank')
                    break;
    }
}
    const {image}=bannerData
    return (
        <header className="banner" style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center center'
        }}>
            <div className='content_container'>
                <h1 className="banner_title">{bannerData?.title}</h1>
                <h1 className='description'>{bannerData?.description}</h1>
                <div>
                    <button className='button_wide_light' onClick={()=>{handleRedirectionClick('linkedIn')}}><span style={{display:'flex',alignItems:'center'}}><FaLinkedin style={{marginRight:'5px'}}/> {buttonDesc?.button1}</span></button>
                    <button className='button_wide_dark' onClick={()=>{handleRedirectionClick('github')}}><span style={{display:'flex',alignItems:'center'}}><FaGithub style={{marginRight:'5px'}}/> {buttonDesc?.button2}</span></button>
                </div>
                <Strip />
            </div>
        <div className="fade_bottom"></div>
        </header>
    )
}

const Strip =()=>{
    const handleWhatsappClick=()=>{
        window.open("https://wa.me/+919015709221/",'_blank')
    }
    return (
        <>
        <span className="strip" onClick={handleWhatsappClick}>
        <FaWhatsapp className="whatsapp_icon"/> Ping Me
        </span>
        </>
    )
}

export default Banner