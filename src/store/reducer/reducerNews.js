import { SET_NEWS } from "../actions/setNews";

export const reducerNews = (state = [], action) => {
  switch (action.type) {
    case SET_NEWS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
