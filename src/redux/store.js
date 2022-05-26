import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CatFactsReducer from "./reducer";

let store = createStore(CatFactsReducer, applyMiddleware(thunk));

export default store;
