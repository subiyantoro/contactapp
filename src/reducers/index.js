import contacts from "./contacts";
import {combineReducers} from "redux";

const reducers = {
    contactStore: contacts
}

const rootReducers = combineReducers(reducers)
export default rootReducers
