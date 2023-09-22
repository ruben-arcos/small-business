import { combineReducers } from "redux";

// const taquerias = (state = [], action) => {
//     switch(action.type) {
//         case 'CREATE_LISTING':
//             return [...state, action.value]

//         case 'DELETE_LISTING:'
            
//     }
// }

const taquerias = (state = []) => state
const name = (state = []) => state



export default combineReducers({taquerias, name})