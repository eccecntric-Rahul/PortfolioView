import React, { useEffect } from 'react'
import Banner from '../../Components/Banner/Banner'
import Row from '../../Components/Row/Row'
import { getDetails, getExperience, getSkills, getTraining } from '../../Methods'
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
    },[])
    
  return (
    <>
      <Banner />
      <div className="container">
      <Row title={'Skills'} cards={state?.skills}/>
      <Row title={'Experience & Trainings'} cards={state?.skills}/>
      </div>
    </>
  )
}

export default Home
