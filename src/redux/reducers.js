import { combineReducers } from "redux";

const taquerias = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_LISTING':
            return [...state, action.value]

            // const cars = [ ...state ]
            // cars.splice(action.value, 1)
            // return cars 

        default:
            return state
       
    }
}

// const taquerias = (state = []) => state
const username = (state = []) => state



export default combineReducers({taquerias, username})