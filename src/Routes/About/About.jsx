import React from 'react'
import Carousel from '../../Components/Carousel/MyCarousel'
import Row from '../../Components/Row/Row'
import "./About.css"
import {useSelector} from "react-redux"
const About = () => {
  const photos=useSelector((state)=>(state?.photos))
//   const imgArr=["https://lh3.googleusercontent.com/JeWmvm7FtJxPblOjrx7LD-iO2IIFuogFAB8DQkVRz8Cs3DLx9QNoltgfB-GpY_BlrBlRuk3cETIiGv5W9Tx46wVYXvTB_8Yrxq5jdfLh3mp0fp8d6JNOHiuy5_AWVcCv1tjxtJX9-Q=w2400",
//     "https://lh3.googleusercontent.com/rgyjMP5P8PIAJoT5M6pDuYHPVWM6HfpVIpJqH4_BVQNkjfJ1Uf6os_D0oygnEzG2lBncE32l8SUKpg_mgy0qjY8INIpn2MhWprP7y7TbWL6KNqYlMddR50TwlQGyOskiOlLcBzXM4w=w2400",
// "https://lh3.googleusercontent.com/xNcd8d-lv7VYF1lffRMNiUYyd1YOsw3Asf869CfMcszwGi25bCkrwtNTghMKbjgvY7NaTWb9TXk5aR8UxrwXoQPrRgAX5grSxxynPAfO3bU6psvUvBSCokvz6gALBeszCYQA5rD6fg=w2400"
// ]
  const imgArr=photos?.filter((photo)=>photo?.category==='aboutBanner')
  const photosArr=photos?.filter((photo)=>photo?.category==='photos')?.map(photo=>photo?.image)
  return (
    <div className="about">
    <div className="carousel_section">
    <Carousel imgArr={imgArr}/> 
    <div className="greeting_section">
    <h3 className="about_title">Hi, There</h3>
    <p className="about_description">Welcome , I am glad that you are here to know more about me.</p>
    </div>
    <div className="fade_bottom_about"></div>
    </div>
      <Row title={'My Photos'} cards={photosArr}/>
      <Row title={'Hobbies'} cards={[]}/>
    </div>
  )
}

export default About