import axios from 'axios';
import dotenv from 'react-dotenv';
import { actionCreator, FETCHDATA_FAILURE, FETCHDATA_SUCCESS } from '../Action';

export const commonGet = async (url)=>{
    try{
        const resp = await axios.get("https://portfolioserver-7bou.onrender.com"+url);
        return resp 
    }catch(err){
        console.log(err)
        return err;
    }
}

export const getSkills =()=> async (dispatch,state)=>{
    try{
        const res = await commonGet('/api/skill');
        dispatch({type:FETCHDATA_SUCCESS,payload:{skills:res?.data}});
    }catch(err){
        console.log(err)
        dispatch({type:FETCHDATA_FAILURE,payload:{skills:[]}})
    }
}

export const getProfile =()=> async (dispatch,state)=>{
    try{
        const res = await commonGet('/api/profile');
        dispatch({type:FETCHDATA_SUCCESS,payload:{profile:res?.data}});
    }catch(err){
        console.log(err)
        dispatch({type:FETCHDATA_FAILURE,payload:{profile:[]}})
    }
}