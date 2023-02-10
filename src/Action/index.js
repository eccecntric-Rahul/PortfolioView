export const FETCHDATA_SUCCESS = 'FETCHDATA_SUCCESS'
export const FETCHDATA_FAILURE ='FETCHDATA_FAILURE'
export const SELECT_PROFILE = 'SELECT_PROFILE'
export const POSTDATA_SUCCESS = 'POSTDATA_SUCCESS'
export const POSTDATA_FAILURE = 'POSTDATA_FAILURE'
export const SEARCH_VALUE ='SEARCH_VALUE'
export const actionCreator =(type,body)=>{
    return {type:type,payload:body}
}

