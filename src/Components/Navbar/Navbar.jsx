import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.css'
import profile from '../../Assets/avatar-netflix.jpg'
import {useSelector} from 'react-redux'
const Navbar = () => {
  const [show,setShow]=useState(false);
  const selectedProfile=useSelector((state)=>(state?.selectedProfile))

  useEffect(()=>{
   window.addEventListener('scroll',()=>{
        if(window.pageYOffset){
          setShow(true);
        }
        else 
        setShow(false)
    })
    return ()=>{window.removeEventListener("scroll",null)}
  },[])
  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className="nav_container">
        <span className="nav_logo">Tech-Rahul</span>
        <span className="navbar">
        <NavLink to='/home' className={({ isActive }) =>isActive ? `nav_button active_style` : 'nav_button'} >HOME</NavLink>
        <NavLink to='/about' className={({ isActive }) =>isActive ? `nav_button active_style` : 'nav_button'}>ABOUT</NavLink>
        <NavLink to='/resume' className={({ isActive }) =>isActive ? `nav_button active_style` : 'nav_button'}>RESUME</NavLink>
        <NavLink to='/contact' className={({ isActive }) =>isActive ? `nav_button active_style` : 'nav_button'}>CONTACT</NavLink>
        </span>
        </div>
        <div className="profile_container_small">
        <img src={selectedProfile && selectedProfile.image ?selectedProfile.image:profile} alt="profile" className="profile" />
        </div>
    </div>
  )
}


export default Navbar