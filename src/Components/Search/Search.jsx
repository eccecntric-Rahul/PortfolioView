import React, { useRef, useState } from 'react'
import {InputText} from 'primereact/inputtext';
import {Animated} from "react-animated-css";
import './Search.css'
import { useNavigate,useLocation } from 'react-router-dom';
import useDebounce from '../../Hooks/useDebounce';
import { useDispatch } from 'react-redux';
import { SEARCH_VALUE } from '../../Action';
const Search = (props) => {
    const [show,setShow]=useState (false);
    const [searchVal,setSearchVal]=useState('');
    const searchRef=useRef(null);
    const navigate =useNavigate();
    const location =useLocation();
    const [prevRoute,setPrevRoute]=useState(null);
    const dispatch=useDispatch();
    const {onlySearchBar}=props;
    const handleShow =()=>{
        setShow(true);
        setTimeout(()=>searchRef.current.focus(),100);
    }
    const handleBlur=()=>{
        if(!searchVal)
        setShow(false)
    }
    const handleInput=(e)=>{
        if(e?.target?.value){
            if(location.pathname?.includes('search')){
            }else{
                setPrevRoute(location.pathname);
                navigate('/search')
            }

        }else{
            navigate(prevRoute)
        }
    }
    const handleSearch=(e)=>{
        setSearchVal(e?.target?.value)
    }

    useDebounce(() => {
        console.log(searchVal)
        dispatch({type:SEARCH_VALUE,payload:{searchVal}})
      }, [ searchVal], 800
    );
   const handleEmpty=()=>{
    setSearchVal('')
    navigate(prevRoute)
    if(!onlySearchBar)setShow(false)
}
  return (
      onlySearchBar?
      <div className="animation_container">
       <span className="p-input-icon-right">
       {searchVal?.length ? <i className="pi  pi-times search_empty_icon" onClick={handleEmpty}/>:null}
    <span  className="p-input-icon-left" >
        <i className="pi pi-search search_icon"  />
        <InputText placeholder="Search" onChange={(e)=>handleSearch(e)} value={searchVal} onInput={handleInput} autoFocus ref={searchRef} />
    </span>
    </span>
      </div>
      :
      <>
      <Animated animationIn="slideInRight" className="animation_container" animationOut="slideOutRight" animationInDuration={100} animationOutDuration={100} isVisible={show}>
      <span className="p-input-icon-right">
               {searchVal?.length ? <i className="pi  pi-times search_empty_icon" onClick={handleEmpty}/>:null}
            <span  className="p-input-icon-left" >
                <i className="pi pi-search search_icon"  />
               
                <InputText placeholder="Skills, Training, Experience" onChange={(e)=>handleSearch(e)} value={searchVal} onInput={handleInput} autoFocus onBlur={handleBlur} ref={searchRef} />
            </span>
            </span>
    </Animated>
            <span style={show?{display:'none'}:{display:'inline',cursor:"pointer"}}  onClick={handleShow}>
            <i className="pi pi-search search_icon"  />
      </span>
      </>
  )
}

export default Search