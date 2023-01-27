import { FETCHDATA_FAILURE, FETCHDATA_SUCCESS, SELECT_PROFILE } from "../Action"

const initialState=[];
export const rootReducer =(state=initialState,action)=>{
    switch(action.type){
        case FETCHDATA_SUCCESS:return {...state,...action.payload}
        case FETCHDATA_FAILURE: return {...state,...action.payload}
        case SELECT_PROFILE: return {...state,selectedProfile:action.payload}
        default: return state;
    }
}