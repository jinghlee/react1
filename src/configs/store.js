import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "../modules/authentication/services/AuthenticationReducer";
import drinkReducer from "../modules/drink/services/DrinkReducer";
import menuReducer from "../modules/menu/services/MenuReducer";
import genReducer from "../commons/GenericReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer = combineReducers({
    authReducer,
    drinkReducer,
    menuReducer,
    genReducer
})


let store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))

export default store;