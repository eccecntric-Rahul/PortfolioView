import React, { useRef, useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import {InputText} from 'primereact/inputtext';
import {Animated} from "react-animated-css";
import './Search.css'
const Search = () => {
    const [show,setShow]=useState (false);
    const searchRef=useRef(null);
    const handleShow =()=>{
        setShow(true);
        setTimeout(()=>searchRef.current.focus(),100);
    }
    const handleBlur=()=>{
        setShow(false)
    }
  return (
      <>
      <Animated animationIn="slideInRight" className="animation_container" animationOut="slideOutRight" animationInDuration={100} animationOutDuration={100} isVisible={show}>
            <span  className="p-input-icon-left">
                <i className="pi pi-search search_icon"  />
                <InputText placeholder="Skills, Training, Experience" autoFocus onBlur={handleBlur} ref={searchRef} />
            </span>
    </Animated>
            <span style={show?{display:'none'}:{display:'inline'}}  onClick={handleShow}>
            <i className="pi pi-search search_icon"  />
      </span>
</>
  )
}

export default Search