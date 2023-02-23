import React, { useEffect } from 'react'
import rLogo from '../../Assets/r-logo.jpg' 
import "./Animation.css";
import entryTone from "../../Assets/mp3/entryTone.mp3";
import Sound from 'react-sound';
import useSound from 'use-sound'; 
import tone from '../../Assets/mp3/tone.mp3'
const Animation = () => {
  
  return (
    <div className="anim_container">
        <img src={rLogo} alt="r-logo" className="rLogo" />
    </div>
  )
}

export default Animation