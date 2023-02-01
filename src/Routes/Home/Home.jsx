import React, { useEffect } from 'react'
import Banner from '../../Components/Banner/Banner'
import Row from '../../Components/Row/Row'
import { getSkills } from '../../Methods'
import {useSelector,useDispatch} from 'react-redux'
const Home = () => {
  const state = useSelector ((state)=>(state));
  const dispatch = useDispatch();
    useEffect (()=>{
      dispatch(getSkills())
    },[])
    
  return (
    <>
      <Banner />
      <Row title={'Skills'} cards={state?.skills}/>
    </>
  )
}

export default Home