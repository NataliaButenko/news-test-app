import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReduser";

export const store = createStore(rootReducer, applyMiddleware(thunk));
