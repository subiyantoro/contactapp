import {ADD_CONTACT, DELETE_CONTACT, GET_CONTACT, LOADING} from "../configs/types";
import axios from "axios";
import {BASE_URL} from "../configs/utils"

export const getContacts = () => {
    return async (dispatch) => {
        dispatch({
            type: LOADING
        })
        axios.get(BASE_URL+'contact')
            .then((res) => {
                dispatch({
                    type: GET_CONTACT,
                    payload: res.data.data
                })
            })
            .catch((e) => {
                console.log(e)
            })
    }
}

export const addContact = (payload) => {
    return async (dispatch) => {
        dispatch({
            type: LOADING
        })
        axios.post(BASE_URL+'contact', payload)
            .then((res) => {
                dispatch({
                    type: ADD_CONTACT,
                    payload: payload
                })
                dispatch(getContacts())
            })
            .catch((e) => {
                console.log(e)
            })
    }
}

export const deleteContact = (id) => {
    return async (dispatch) => {
        axios.delete(BASE_URL+'contact/'+id)
            .then((res) => {
                console.log(res)
                dispatch({
                    type: DELETE_CONTACT
                })
                dispatch(getContacts())
            })
            .catch((e) => {
                console.log(e)
            })
    }
}
