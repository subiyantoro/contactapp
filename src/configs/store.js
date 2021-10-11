import rootReducers from "../reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

const middleware = composeWithDevTools(applyMiddleware(promise, thunk))
const store = createStore(rootReducers, middleware)

export default store
