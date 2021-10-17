import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { popoverReducer } from "./popoverReducer";

const reducers = combineReducers({ popover: popoverReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
