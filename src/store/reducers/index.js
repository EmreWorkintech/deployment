import { combineReducers } from "redux";
import { settingsReducer } from "./settingsReducer";
import { counterReducer } from "./counterReducer";


export const reducers = combineReducers({
    settings: settingsReducer,
    counter: counterReducer
})