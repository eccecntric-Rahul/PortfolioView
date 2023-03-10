import React, { useEffect, useState } from 'react'
import { getProfile } from '../../Methods'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate,useLocation } from 'react-router-dom';
import './Entry.css'
import { actionCreator, SELECT_PROFILE } from '../../Action';
import Loader from '../../Components/Loader/Loader'
import Animation from '../../Components/Animation/Animation'
import useSound from 'use-sound';
import entryTone from '../../Assets/mp3/entryTone.mp3'
import rLogo from '../../Assets/r-logo.jpg'
import { ConfirmDialog } from 'primereact/confirmdialog';
import { confirmDialog } from 'primereact/confirmdialog';
import { Animated } from 'react-animated-css';
function Entry() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const profiles = useSelector((state) => (state?.profile));
  const [allowSound, setAllowSound] = useState(false);
  const [allowPageLoad, setAllowPageLoad] = useState(false);
  const location = useLocation();
  const [play] = useSound(entryTone, {
    soundEnabled: true,
    volume: 1,
  });
  const accept = () => {
    setAllowPageLoad(true);
    setAllowSound(true);
  }
  const reject = () => {
    setAllowPageLoad(true);
    setAllowSound(false);
  }
  useEffect(() => {
     !location?.state?.onlyProfiles && confirmDialog({
      message: 'Are you ok with playing sound ? Press Yes or No to continue..',
      header: '',
      icon: 'pi pi-info-circle',
      position: 'center',
      accept,
      reject,
    });
  }, [])
  useEffect(() => {
    if (allowSound === true)
      play();
  }, [allowSound])
  useEffect(() => {
    if (allowPageLoad === true)
      setTimeout(() => {
        setLoading(false)
      }, 3000)
  }, [allowPageLoad])
  useEffect(() => {
    dispatch(getProfile());
  }, [])
  const handleProfileClick = (profile) => {
    dispatch(actionCreator(SELECT_PROFILE, profile))
    navigate('/home', { replace: true });
  }
  return (
    <>

      {
      location && location.state && location.state.onlyProfiles?
      profiles && profiles.length ?
            <Animated className="profile_main_container">
              <h1 className="main_title">Who's Watching?</h1>
              <div className="profile_sub_container">
                {profiles?.map((profile) => {
                  return <span className='profile_container' key={profile?.name}>
                    <img src={profile?.image} alt={profile?.name} className="profile_image" onClick={() => { handleProfileClick(profile) }} />
                    <span className='title'>{profile?.name}</span>
                  </span>
                })}
              </div>
            </Animated>
            :
            <Loader />
            :
      allowPageLoad ?
        loading ? <Animation />
          :
          profiles && profiles.length ?
            <Animated className="profile_main_container">
              <h1 className="main_title">Who's Watching?</h1>
              <div className="profile_sub_container">
                {profiles?.map((profile) => {
                  return <span className='profile_container' key={profile?.name}>
                    <img src={profile?.image} alt={profile?.name} className="profile_image" onClick={() => { handleProfileClick(profile) }} />
                    <span className='title'>{profile?.name}</span>
                  </span>
                })}
              </div>
            </Animated>
            :
            <Loader />
        :
        <div className="entry_logo_container">
          <img src={rLogo} alt="entry_logo" />
        </div>
      }
      <ConfirmDialog />
    </>
  )
}

export default Entry