import React, { useEffect } from 'react'
import rLogo from '../../Assets/r-logo.jpg' 
import "./Animation.css";

const Animation = () => {
  
  return (
    <div className="anim_container">
        <img src={rLogo} alt="r-logo" className="rLogo" />
    </div>
  )
}

export default Animation