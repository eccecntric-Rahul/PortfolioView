import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../Components/Loader/Loader';
import Row from '../../Components/Row/Row';
import "./SearchRoute.css"
const SearchRoute = () => {
  const [loading,setLoading]=useState (true);
  const state=useSelector((state)=>state); 
  const [screenData,setScreenData]=useState({
    row1:[],
    row2:[],
    row3:[],
    row4:[],
  })
  const {searchVal}=state;
  const {row1,row2,row3,row4}=screenData;
  const findSearchResult=()=>{
    setScreenData({
      row1:state?.skills?.filter(skill=>skill?.name?.toLowerCase()?.includes(searchVal?.toLowerCase())),
      row2:[...state?.training?.filter(item=>item?.name?.toLowerCase()?.includes(searchVal?.toLowerCase())),...state?.experience?.filter(item=>item?.name?.toLowerCase()?.includes(searchVal?.toLowerCase()))],
      row3:state?.education?.filter(education=>education?.name?.toLowerCase()?.includes(searchVal?.toLowerCase())),
      row4:state?.project?.filter(project=>project?.name?.toLowerCase()?.includes(searchVal?.toLowerCase())),
    })
  }
  useEffect(()=>{
    setLoading(true);
    if(searchVal?.length>1){
      setLoading(false)
      findSearchResult()
    }else{
      setTimeout(()=>setLoading(false),2000)
    }
  },[searchVal])



  if(loading)
  return <Loader />
  else
  return (
    <div className='search_route'>
      {row1?.length ? <Row title={'Skills'} cards={row1}/>:null}
      {row2?.length ? <Row title={'Experience & Trainings'} cards={row2}/>:null}
      {row3?.length ? <Row title={'Education & Activities'} cards={row3}/>:null}
      {row4?.length ? <Row title={'Projects'} cards={row4}/>:null}
      {row1?.length<1 && row2?.length<1 && row3?.length<1 && row4?.length<1 && <div className="no_data_found">
          <div className="no_data_container">
          <p>Your search for "{searchVal}" did not find any matches.</p>
          <p>Suggestions :</p>
          <ul>
            <li>Try different keywords</li>
            <li>Looking for skill ,experience or education?</li>
            <li>Try using the name of the skill or training</li>
          </ul>
          </div>
      </div> }
    </div>
  )
}

export default SearchRoute