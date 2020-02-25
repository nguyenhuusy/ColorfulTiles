import {SAVE_COLOR,NAME_COLOR,DISPLAY_COLOR} from '../type';

const initialState = {
    data:[],
    name:[],
    display:[]
}

export default function(state=initialState,action) {
    switch (action.type) {
        case SAVE_COLOR:
            
        return {
                ...state,
                data:action.payload
                
            }
        case NAME_COLOR:
        return {
            ...state,
            name:action.payload
        }
        case DISPLAY_COLOR:
        return {
            ...state,
            display:action.payload
        }
        default:
            return state;
    }
}