import { combineReducers } from "redux";
import { reducerNews } from "./reducerNews";
import { reducerLoader } from "./reducerLoader";
import { reducerProfile } from "./reducerProfile";

const rootReducer = combineReducers({
  news: reducerNews,
  loader: reducerLoader,
  profile: reducerProfile
});

export default rootReducer;
