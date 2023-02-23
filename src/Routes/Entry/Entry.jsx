import React, { useEffect, useRef, useState } from 'react'
import { getProfile } from '../../Methods'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Entry.css'
import { actionCreator, SELECT_PROFILE } from '../../Action';
import Loader from '../../Components/Loader/Loader'
import Animation from '../../Components/Animation/Animation'
import useSound from 'use-sound';
import entryTone from '../../Assets/mp3/entryTone.mp3'
import rLogo from '../../Assets/r-logo.jpg'
import { ConfirmDialog } from 'primereact/confirmdialog';
import { confirmDialog } from 'primereact/confirmdialog';
function Entry() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const profiles = useSelector((state) => (state?.profile));
  const [allowSound, setAllowSound] = useState(false);
  const [allowPageLoad, setAllowPageLoad] = useState(false);
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
    confirmDialog({
      message: 'Are you ok with playing sound in the background ?',
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      position: 'top-right',
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

      {allowPageLoad ?
        loading ? <Animation />
          :
          profiles && profiles.length ?
            <div className="profile_main_container">
              <h1 className="main_title">Who's Watching?</h1>
              <div className="profile_sub_container">
                {profiles?.map((profile) => {
                  return <span className='profile_container' key={profile?.name}>
                    <img src={profile?.image} alt={profile?.name} className="profile_image" onClick={() => { handleProfileClick(profile) }} />
                    <span className='title'>{profile?.name}</span>
                  </span>
                })}
              </div>
            </div>
            :
            <Loader />
        :
        <div className="profile_main_container">
          <img src={rLogo} alt="r-logo" />
        </div>
      }
      <ConfirmDialog />
    </>
  )
}

export default Entry