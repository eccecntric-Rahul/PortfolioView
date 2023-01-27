import React, { useEffect } from 'react'
import { getProfile } from '../../GetMethods'
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import './Entry.css'
import { actionCreator, SELECT_PROFILE } from '../../Action';
function Entry() {
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const profiles = useSelector((state)=>(state?.profile));
    useEffect(()=>{
        dispatch(getProfile());
    },[])
    const handleProfileClick=(profile)=>{
        dispatch(actionCreator(SELECT_PROFILE,profile))
        navigate('/home',{replace:true});
    }
  return (
    <div className="profile_main_container">
        <h1 className="main_title">Who's Watching?</h1>
        <div>
        {profiles?.map((profile)=>{
            return  <span className='profile_container' key={profile?.name}>
          <img src={profile?.image} alt={profile?.name} className="profile_image" onClick={()=>{handleProfileClick(profile)}} />
          <span className='title'>{profile?.name}</span>
      </span> 
        })}
        </div>
    </div>
  )
}

export default Entry