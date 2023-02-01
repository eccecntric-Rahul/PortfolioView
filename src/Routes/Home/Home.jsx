import React, { useEffect } from 'react'
import Banner from '../../Components/Banner/Banner'
import Row from '../../Components/Row/Row'
import { getSkills } from '../../Methods'
import {useSelector,useDispatch} from 'react-redux'
import './Home.css'
const Home = () => {
  const state = useSelector ((state)=>(state));
  const dispatch = useDispatch();
    useEffect (()=>{
      dispatch(getSkills())
    },[])
    
  return (
    <>
      <Banner />
      <div className="container">
      <Row title={'Skills'} cards={state?.skills}/>
      </div>
    </>
  )
}

export default Home