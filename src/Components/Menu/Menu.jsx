import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { actionCreator, SELECT_PROFILE } from '../../Action';
import {FaCaretDown,FaCaretUp} from 'react-icons/fa'
import profile from '../../Assets/avatar-netflix.jpg'
import './Menu.css'
import { useNavigate } from 'react-router-dom';
const Menu = () => {
  const profiles=useSelector((state)=>(state?.profile))  
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const selectedProfile=useSelector((state)=>(state?.selectedProfile))
  
  const handleProfileClick=(profile)=>{
      dispatch(actionCreator(SELECT_PROFILE,profile))
      navigate('/home',{replace:true});
  }
  return (
    <div className="menu">
        <span className="profile_and_down_container">
        <img src={selectedProfile && selectedProfile.image ?selectedProfile.image:profile} alt="profile" className="profile" />
        <FaCaretDown className="navbar_down"/>
        </span>
    <div className="menu_list">
        <FaCaretUp className="menu_up_icon"/>
        {profiles?.map((profile)=>{
            return  <div className='list_item' key={profile?.name} onClick={()=>{handleProfileClick(profile)}}>
          <img src={profile?.image} alt={profile?.name} className="list_image"  />
          <span className='menu_title'>{profile?.name}</span>
      </div> 
        })}
        <div className="menu_button">
            <span>Wanna hire me ?</span>
        </div>
    </div>
    </div>
  )
}

export default Menu