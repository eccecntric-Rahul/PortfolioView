import React from 'react'
import Carousel from '../../Components/Carousel/MyCarousel'
import Row from '../../Components/Row/Row'
import "./About.css"
import { useSelector } from "react-redux"
import MyAccordion from '../../Components/MyAccordion/MyAccordion'
import { useNavigate } from 'react-router-dom';
import FloatingMenu from '../../Components/FloatingMenu/FloatingMenu'

const About = () => {
  const photos = useSelector((state) => (state?.photos))
  const imgArr = ["https://lh3.googleusercontent.com/JeWmvm7FtJxPblOjrx7LD-iO2IIFuogFAB8DQkVRz8Cs3DLx9QNoltgfB-GpY_BlrBlRuk3cETIiGv5W9Tx46wVYXvTB_8Yrxq5jdfLh3mp0fp8d6JNOHiuy5_AWVcCv1tjxtJX9-Q=w2400",
    "https://lh3.googleusercontent.com/rgyjMP5P8PIAJoT5M6pDuYHPVWM6HfpVIpJqH4_BVQNkjfJ1Uf6os_D0oygnEzG2lBncE32l8SUKpg_mgy0qjY8INIpn2MhWprP7y7TbWL6KNqYlMddR50TwlQGyOskiOlLcBzXM4w=w2400",
    "https://lh3.googleusercontent.com/xNcd8d-lv7VYF1lffRMNiUYyd1YOsw3Asf869CfMcszwGi25bCkrwtNTghMKbjgvY7NaTWb9TXk5aR8UxrwXoQPrRgAX5grSxxynPAfO3bU6psvUvBSCokvz6gALBeszCYQA5rD6fg=w2400"
  ]
  const photosArr = photos?.filter((photo) => photo?.category === 'photos')
  const navigate=useNavigate();
  return (
    <div className="about">
      <div className="carousel_section">
        <Carousel imgArr={imgArr} />
        <div className="greeting_section">
          <h3 className="about_title">Hi, There</h3>
          <p className="about_description">Welcome , I am glad that you are here to know more about me.</p>
        </div>
        <div className="fade_bottom_about"></div>
      </div>
      <Row title={'My Photos'} cards={photosArr} onlyPhoto />
      <Row title={'Hobbies'} cards={[]} />
      <div className="about_details_section">
        <div className="about_col1">
          <MyAccordion heading={'Wanna know thinking behind making this ?'} content={<li>I wanted to showcase more about myself with some unique approach . I love netflix's ui alot . And the thing is every person loves watching netflix . So I thought why not choose the thing people love doing the most. And that is how this came to reality.</li>}/>
          <MyAccordion heading={'Tech Stack for the app'} content={<div style={{marginBottom:"2rem"}}>
            <h3 style={{color:"var(--red)"}}>Frontend :</h3> 
            <ol>
              <li>It is built using React.js.</li>
              <li>The Ui library for the project is Prime React .</li>
              </ol>
             <h3 style={{color:"var(--red)"}}>Backend :</h3>
             <ol>
             <li>It is built using Node.js.</li>
              <li>Nodemailer to send emails for the reviews.</li>
              </ol>
              </div>
          }
          />
          <MyAccordion style={{marginBottom:"5rem"}}  heading={'Some key points about this app'} content={
            <ol>
              <li>This app shows all my skills, experience and qualities in the app.</li>
              <li>You can Compliment me if you want by going to contact section.</li>
              <li>Any compliment you post will be recieved by me on my email address.</li>
              <li>You can search any skill,training ,education and experience in the search bar.</li>
            </ol>
          }/>
        </div>
        <div className="about_col2">
          {/* <FloatingMenu /> */}
        </div>
      </div>
      <div className="want_to_container">
        <span>Want To Compliment ?</span>
        <button className="grey_button" onClick={()=>navigate('/contact')}>LET'S GO</button>
      </div>
    </div>
  )
}

export default About