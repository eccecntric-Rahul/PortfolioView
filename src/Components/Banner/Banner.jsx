import React, { useState } from 'react'
import './Banner.css'
import { FaGithub,FaLinkedin } from "react-icons/fa";
const Banner = (props) => {
    const [bannerData, setBannerData] = useState ({
        title: 'Rahul Kumar',
        image: "https://picsum.photos?random=1",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quibusdam itaque rem, voluptates quis tempore, amet quisquam commodi natus dolor consectetur incidunt. Facilis aliquam fugit soluta cum, doloremque excepturi velit?"
    });
    const [buttonDesc, setButtonDesc] = useState({
        button1: 'Linked In',
        button2: "Github"
    })
    return (
        <header className="banner" style={{
            backgroundSize: 'cover',
            backgroundImage: `url("https://picsum.photos/800/1200?random=1")`,
            backgroundPosition: 'center center'
        }}>
            <div className='content_container'>
                <h1 className="banner_title">{bannerData?.title}</h1>
                <h1 className='description'>{bannerData?.description}</h1>
                <div>
                    <button className='button_wide_light'><span style={{display:'flex',alignItems:'center'}}><FaLinkedin style={{marginRight:'5px'}}/> {buttonDesc?.button1}</span></button>
                    <button className='button_wide_dark'><span style={{display:'flex',alignItems:'center'}}><FaGithub style={{marginRight:'5px'}}/> {buttonDesc?.button2}</span></button>
                </div>
            </div>
        <div className="fadebottom"></div>
        </header>
    )
}

export default Banner