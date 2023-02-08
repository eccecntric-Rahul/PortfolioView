import React, { useEffect } from 'react'
import Banner from '../../Components/Banner/Banner'
import Row from '../../Components/Row/Row'
import { getDetails, getEducation, getExperience, getPhotos, getProject, getSkills, getTraining } from '../../Methods'
import {useSelector,useDispatch} from 'react-redux'
import './Home.css'
const Home = () => {
  const state = useSelector ((state)=>(state));
  const dispatch = useDispatch();
    useEffect (()=>{
      dispatch(getSkills())
      dispatch(getTraining())
      dispatch(getExperience())
      dispatch(getDetails())
      dispatch(getEducation())
      dispatch(getProject())
      dispatch(getPhotos())
    },[])
    
  return (
    <>
      <Banner />
      <div className="container">
      <Row title={'Skills'} cards={state?.skills}/>
      <Row title={'Experience & Trainings'} cards={[...state?.training,...state?.experience]}/>
      <Row title={'Education & Activities'} cards={state?.education}/>
      <Row title={'Projects'} cards={state?.project}/>
      </div>
    </>
  )
}

export default Home
