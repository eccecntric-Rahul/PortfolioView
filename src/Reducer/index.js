import { FETCHDATA_FAILURE, FETCHDATA_SUCCESS, POSTDATA_FAILURE, POSTDATA_SUCCESS, SEARCH_VALUE, SELECT_PROFILE } from "../Action"

const initialState=[];
export const rootReducer =(state=initialState,action)=>{
    switch(action.type){
        case FETCHDATA_SUCCESS:return {...state,...action.payload}
        case FETCHDATA_FAILURE: return {...state,...action.payload}
        case SELECT_PROFILE: localStorage.setItem('selectedProfile',JSON.stringify(action.payload));
        return {...state,selectedProfile:action.payload}
        case POSTDATA_SUCCESS: return {...state,...action.payload}
        case POSTDATA_FAILURE: return {...state,...action.payload}
        case SEARCH_VALUE: return {...state,...action.payload}
        default: return state;
    }
}