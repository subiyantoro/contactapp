import {ADD_CONTACT, DELETE_CONTACT, GET_CONTACT, LOADING} from "../configs/types";

const initState = {
    listContact: [],
    isLoading: false
}

export default (state = initState, action = {}) => {
    switch (action.type) {
        case GET_CONTACT: {
            return {
                ...state,
                listContact: action.payload,
                isLoading: false
            }
        }
        case LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ADD_CONTACT: {
            return {
                ...state,
                isLoading: false,
            }
        }
        case DELETE_CONTACT: {
            return {
                ...state,
                isLoading: false
            }
        }
        default: return state
    }
}
