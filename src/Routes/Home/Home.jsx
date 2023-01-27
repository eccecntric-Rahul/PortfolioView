import React, { useEffect, useState } from 'react'
import Banner from '../../Components/Banner/Banner'
import Navbar from '../../Components/Navbar/Navbar'
import Row from '../../Components/Row/Row'
import { getSkills } from '../../GetMethods'
import {useSelector,useDispatch} from 'react-redux'
const Home = () => {
  const [skill,setSkill]=useState([])
  const state = useSelector ((state)=>(state));
  const dispatch = useDispatch();
    useEffect (()=>{
      dispatch(getSkills())
    },[])
    
  return (
    <>
      <Navbar />
      <Banner />
      <Row title={'Skills'} cards={state?.skills}/>
     
    </>
  )
}

export default Home