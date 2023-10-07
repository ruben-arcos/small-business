import { combineReducers } from "redux";

const taquerias = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_LISTING':
            return [...state, action.value]

            case 'REMOVE_TAQUERIA':
            const taqueria = [ ...state ]
            taqueria.splice(action.value, 1)
            return taqueria

        default:
            return state
       
    }
}

// const taquerias = (state = []) => state
const username = (state = [], action) => {
    switch(action.type) {
        case 'LOG_IN_USER':
            console.log(state, 'reducer')
            return state = action.value
        
        case 'LOG_OUT_USER':
            return state = ""


        default:
            return state;
    }
}



export default combineReducers({taquerias, username})