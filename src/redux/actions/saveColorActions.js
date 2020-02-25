import {SAVE_COLOR,NAME_COLOR,DISPLAY_COLOR} from '../type';

export const saveColor=(data)=> dispatch => {
    
    return dispatch({
            type:SAVE_COLOR,
            payload:data
        })
    
}
export const nameColor=(data)=>dispatch=>{
    return dispatch({
        type:NAME_COLOR,
        payload:data
    })
}
export const displayColor=(data)=>dispatch=>{
    return dispatch({
        type:DISPLAY_COLOR,
        payload:data
    })
}