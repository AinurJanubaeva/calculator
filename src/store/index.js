import { combineReducers, createStore } from "redux";
import { calculatorReduser } from "./reduser/calculatorReduser";
import { authReduser } from "./reduser/auth";


 const rootReduser = combineReducers({
    calc:calculatorReduser,
    auth:authReduser
 })

  export const store = createStore(rootReduser)
 

  