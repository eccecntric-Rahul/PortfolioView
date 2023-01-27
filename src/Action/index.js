export const FETCHDATA_SUCCESS = 'FETCHDATA_SUCCESS'
export const FETCHDATA_FAILURE ='FETCHDATA_FAILURE'
export const SELECT_PROFILE = 'SELECT_PROFILE'

export const actionCreator =(type,body)=>{
    return {type:type,payload:body}
}

