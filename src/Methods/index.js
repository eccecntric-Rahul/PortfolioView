import axios from 'axios';
import dotenv from 'react-dotenv';
import { FETCHDATA_FAILURE, FETCHDATA_SUCCESS, POSTDATA_FAILURE, POSTDATA_SUCCESS } from '../Action';

export const commonGet = async (url) => {
    try {
        const resp = await axios.get(dotenv.SERVER_URL + url);
        return resp
    } catch (err) {
        console.log(err)
        return err;
    }
}

export const commonPost = async (url, body) => {
    try {
        const resp = await axios.post(dotenv.SERVER_URL + url, body);
        return resp
    } catch (err) {
        console.log(err)
        return err;
    }
}

export const getSkills = () => async (dispatch, state) => {
    try {
        const res = await commonGet('/api/skill');
        dispatch({ type: FETCHDATA_SUCCESS, payload: { skills: res?.data } });
    } catch (err) {
        console.log(err)
        dispatch({ type: FETCHDATA_FAILURE, payload: { skills: [] } })
    }
}

export const getExperience = () => async (dispatch, state) => {
    try {
        const res = await commonGet('/api/experience');
        dispatch({ type: FETCHDATA_SUCCESS, payload: { experience: res?.data } });
    } catch (err) {
        console.log(err)
        dispatch({ type: FETCHDATA_FAILURE, payload: { experience: [] } })
    }
}

export const getTraining = () => async (dispatch, state) => {
    try {
        const res = await commonGet('/api/training');
        dispatch({ type: FETCHDATA_SUCCESS, payload: { training: res?.data } });
    } catch (err) {
        console.log(err)
        dispatch({ type: FETCHDATA_FAILURE, payload: { training: [] } })
    }
}

export const getProfile = () => async (dispatch, state) => {
    try {
        const res = await commonGet('/api/profile');
        localStorage.setItem('profile',JSON.stringify(res?.data))
        dispatch({ type: FETCHDATA_SUCCESS, payload: { profile: res?.data } });
    } catch (err) {
        console.log(err)
        dispatch({ type: FETCHDATA_FAILURE, payload: { profile: [] } })
    }
}

export const getDetails = () => async (dispatch, state) => {
    try {
        const res = await commonGet('/api/details');
        dispatch({ type: FETCHDATA_SUCCESS, payload: { details: res?.data } });
    } catch (err) {
        console.log(err)
        dispatch({ type: FETCHDATA_FAILURE, payload: { details: [] } })
    }
}

export const getEducation = () => async (dispatch, state) => {
    try {
        const res = await commonGet('/api/education');
        dispatch({ type: FETCHDATA_SUCCESS, payload: { education: res?.data } });
    } catch (err) {
        console.log(err)
        dispatch({ type: FETCHDATA_FAILURE, payload: { education: [] } })
    }
}

export const getProject = () => async (dispatch, state) => {
    try {
        const res = await commonGet('/api/project');
        dispatch({ type: FETCHDATA_SUCCESS, payload: { project: res?.data } });
    } catch (err) {
        console.log(err)
        dispatch({ type: FETCHDATA_FAILURE, payload: { project: [] } })
    }
}

export const getPhotos = () => async (dispatch, state) => {
    try {
        const res = await commonGet('/api/photos');
        dispatch({ type: FETCHDATA_SUCCESS, payload: { photos: res?.data } });
    } catch (err) {
        console.log(err)
        dispatch({ type: FETCHDATA_FAILURE, payload: { photos: [] } })
    }
}

export const postReview = (body) => async (dispatch, state) => {
    try {
        const res = await commonPost('/api/review', body);
        if (res.status == 200)
            dispatch({ type: POSTDATA_SUCCESS, payload: { reviewPosted: true } });
        else{
            
            dispatch({ type: POSTDATA_FAILURE, payload: { reviewPosted: false } })
        }

    } catch (err) {
        console.log(err)
        dispatch({ type: POSTDATA_FAILURE, payload: { reviewPosted: false } })
    }
}

