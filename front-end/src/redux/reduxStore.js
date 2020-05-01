import {combineReducers, createStore} from "redux";
import restsReducer from "./restsReducer";
import restsInfoReducer from "./restsInfoReducer";

let reducers = combineReducers({
    rests: restsReducer,
    restsInfo: restsInfoReducer
});

let store = createStore(reducers);

export default store;