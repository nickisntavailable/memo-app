import {combineReducers} from "redux";
import data from "./data";
import tests from "./tests";


const rootReducer =  combineReducers({data, tests})

export default rootReducer  