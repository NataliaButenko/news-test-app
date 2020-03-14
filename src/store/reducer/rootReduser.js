import { combineReducers } from "redux";
import { reducerNews } from "./reducerNews";

const rootReducer = combineReducers({
  news: reducerNews
});

export default rootReducer;
