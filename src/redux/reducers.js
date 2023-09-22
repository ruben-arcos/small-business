import { combineReducers } from "redux";

const taquerias = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_LISTING':
            return [...state, action.value]

        case 'DELETE_LISTING:'
            
    }
}
