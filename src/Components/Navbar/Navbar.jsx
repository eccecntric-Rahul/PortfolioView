import React, { useEffect, useState } from 'react'
import { NavLink,Link } from "react-router-dom";
import './Navbar.css'
import Menu from '../Menu/Menu';
import NotificationMenu from '../Menu/NotificationMenu';
import Search from '../Search/Search';
const Navbar = () => {
  const [show,setShow]=useState(false);

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
        <span className="nav_logo">TechRahul</span>
        <span className="navbar">
        <NavLink to='/home' className={({ isActive }) =>isActive ? `nav_button active_style` : 'nav_button'} >HOME</NavLink>
        <NavLink to='/about' className={({ isActive }) =>isActive ? `nav_button active_style` : 'nav_button'}>ABOUT</NavLink>
        <NavLink to='/resume' className={({ isActive }) =>isActive ? `nav_button active_style` : 'nav_button'}>RESUME</NavLink>
        <NavLink to='/contact' className={({ isActive }) =>isActive ? `nav_button active_style` : 'nav_button'}>CONTACT</NavLink>
        </span>
        </div>
        <div className="profile_container_small">
        <Search />
        <Link to="/" className="text_children">
        <p>Children</p>
        </Link>
        <NotificationMenu />
        <Menu />
        </div>
    </div>
  )
}


export default Navbar