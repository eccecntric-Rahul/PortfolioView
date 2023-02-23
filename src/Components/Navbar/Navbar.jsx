import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import './Navbar.css'
import Menu from '../Menu/Menu';
import NotificationMenu from '../Menu/NotificationMenu';
import Search from '../Search/Search';
import techRahul from '../../Assets/techrahul.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { Sidebar } from 'primereact/sidebar';
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const navigate =useNavigate()
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset) {
        setShow(true);
      }
      else
        setShow(false)
    })
    return () => { window.removeEventListener("scroll", null) }
  }, [])

  const handleNavClick = () => {
    setSidebarVisible(true)
  }

  return (
    <>
      <div className={`nav ${show && 'nav_black'}`}>
        <div className="nav_container">
          <RxHamburgerMenu className="hamburger" onClick={handleNavClick} />
          <NavLink to='/home'><img src={techRahul} alt="tech-rahul" className="nav_logo" /></NavLink>
          <span className="navbar">
            <NavLink to='/home' className={({ isActive }) => isActive ? `nav_button active_style` : 'nav_button'} >Home</NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive ? `nav_button active_style` : 'nav_button'}>About</NavLink>
            <NavLink to='/resume' className={({ isActive }) => isActive ? `nav_button active_style` : 'nav_button'}>Resume</NavLink>
            <NavLink to='/contact' className={({ isActive }) => isActive ? `nav_button active_style` : 'nav_button'}>Contact</NavLink>
          </span>
        </div>
        <span className="onlySearchBar">
          <Search onlySearchBar={true} />
        </span>
        <div className="profile_container_small">
          <Search />
          <span className="text_children" onClick={()=>navigate('/',{state:{onlyProfiles:true}})}>
            <p>Children</p>
          </span>
          <NotificationMenu />
          <Menu />
        </div>
      </div>
      <Sidebar visible={sidebarVisible} onHide={() => setSidebarVisible(false)}>
        <Menu compactMode/>
        <div className="compact_navbar">
          <NavLink to='/home' className={({ isActive }) => isActive ? `compact_nav_button compact_active_style` : 'compact_nav_button'} >Home</NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive ? `compact_nav_button compact_active_style` : 'compact_nav_button'}>About</NavLink>
            <NavLink to='/resume' className={({ isActive }) => isActive ? `compact_nav_button compact_active_style` : 'compact_nav_button'}>Resume</NavLink>
            <NavLink to='/contact' className={({ isActive }) => isActive ? `compact_nav_button compact_active_style` : 'compact_nav_button'}>Contact</NavLink>
        </div>
        
      </Sidebar>
    </>
  )
}


export default Navbar